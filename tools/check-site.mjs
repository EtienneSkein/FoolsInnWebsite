import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import vm from "node:vm";

const source = readFileSync("src/main.js", "utf8");
const index = readFileSync("index.html", "utf8");
assert.ok(index.includes('href="/src/styles.css"'), "Styles load when refreshing nested room routes");
assert.ok(index.includes('src="/src/main.js"'), "Scripts load when refreshing nested room routes");
const routes = ["/", "/rooms", "/rooms/private", "/rooms/female-dorm", "/tours", "/neighbourhood", "/gallery", "/contact", "/blog", "/faqs", "/book-now"];

function harness(protocol = "http:", mobile = false) {
  const root = { innerHTML: "" };
  const listeners = new Map();
  const noopElement = { addEventListener() {}, setAttribute() {}, classList: { remove() {}, toggle() { return false; } }, focus() {} };
  const location = { protocol, pathname: "/", search: "", hash: "", href: protocol === "file:" ? new URL("../dist/index.html", import.meta.url).href : "http://127.0.0.1:5173/" };
  const document = {
    title: "", currentScript: null,
    getElementById: () => root,
    querySelectorAll: () => [],
    querySelector: (selector) => [".contact-form", ".testimonials"].includes(selector) ? null : noopElement,
  };
  const context = {
    document, location, console, URL, URLSearchParams, Date,
    history: { pushState(_state, _title, href) { const url = new URL(href, location.href); location.pathname = url.pathname; location.search = url.search; } },
    window: { matchMedia: () => ({ matches: mobile, addEventListener() {} }), addEventListener: (name, handler) => listeners.set(name, handler), scrollTo() {} },
  };
  if (protocol === "file:") context.window.__CLIENT_PREVIEW_ASSET_BASE__ = "ignore/src/assets/old-site";
  vm.createContext(context);
  vm.runInContext(source, context);
  return { context, root, location, document };
}

for (const protocol of ["http:", "file:"]) {
  const env = harness(protocol);
  for (const route of routes) {
    if (protocol === "file:") env.location.hash = "#" + route;
    else env.location.pathname = route;
    env.context.render();
    const html = env.root.innerHTML;
    assert.equal((html.match(/<h1(?: |>)/g) || []).length, 1, route + " has one page heading");
    assert.ok(html.includes('href="/" data-link'), route + " has a home link");
    assert.ok(!/Lorem ipsum|Add heading here|Marge to create|Copy outstanding/.test(html), route + " has finished copy");
    for (const [, src] of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
      const path = protocol === "file:" ? fileURLToPath(src) : resolve("." + src);
      assert.ok(existsSync(path), "Missing asset: " + path);
    }
  }
  if (protocol === "file:") env.location.hash = "#/rooms/private";
  else env.location.pathname = "/rooms/private";
  env.context.render();
  assert.ok(env.root.innerHTML.includes("Smart TV"));
  if (protocol === "file:") env.location.hash = "#/faqs";
  else env.location.pathname = "/faqs";
  env.context.render();
  assert.equal((env.root.innerHTML.match(/class="faq-category"/g) || []).length, 5);
  assert.equal((env.root.innerHTML.match(/<details><summary>/g) || []).length, 17);
  assert.ok(env.root.innerHTML.includes("https://onlyfools.co.za/"));
  assert.ok(env.root.innerHTML.includes("https://www.instagram.com/_p0nyup_/"));
  if (protocol === "file:") env.location.hash = "#/book-now?room=Female-Only%20Dorms&guests=3&code=%22%3E%3Cscript%3E";
  else { env.location.pathname = "/book-now"; env.location.search = "?room=Female-Only%20Dorms&guests=3&code=%22%3E%3Cscript%3E"; }
  env.context.render();
  assert.ok(env.root.innerHTML.includes("<option selected>Female-Only Dorms</option>"));
  assert.ok(env.root.innerHTML.includes('value="3" selected'));
  assert.ok(!env.root.innerHTML.includes("<script>"));
}

for (const mobile of [false, true]) {
  const env = harness("http:", mobile);
  const items = [{}, {}, {}];
  env.document.querySelectorAll = (selector) => selector === ".tour-item" ? items : [];
  env.context.syncTourLayout();
  assert.deepEqual(items.map((item) => item.open), mobile ? [true, false, false] : [true, true, true]);
}

const env = harness();
const expectedTours = [
  ["Surf", 54], ["Shark Cage Diving", 45], ["Sea Safari", 52],
  ["Kayak & Sauna", 50], ["Kayak", 55], ["Lion's Head Hike", 49],
  ["Boerie & Games", 48], ["Skydiving", 44], ["Paragliding", 53],
  ["Kruger on the GO", 46], ["Sossusvlei Budget Safari", 47],
  ["Etosha Budget Safari", 43], ["Township Walking Tour", 42],
  ["Township Cycle Tour", 39], ["Secret Hike", 41],
].map(([title, number]) => [title, `design/photo-${number}.jpg`]);
assert.deepEqual(
  JSON.parse(vm.runInContext("JSON.stringify(tours.map(({ title, image }) => [title, image]))", env.context)),
  expectedTours,
  "The 15 advertised tours and their photos match the Figma PDF in order",
);
const handlers = {};
const field = (value) => ({ value, addEventListener(name, fn) { handlers[name] = fn; }, setCustomValidity(message) { this.error = message; } });
const arrival = field("2028-02-29");
const departure = field("2028-02-29");
const form = { elements: { checkin: arrival, checkout: departure }, addEventListener() {} };
env.document.querySelectorAll = (selector) => selector.includes(".booking-search") ? [form] : [];
env.context.bindForms();
assert.equal(departure.min, "2028-03-01");
assert.ok(departure.error);
departure.value = "2028-03-02";
handlers.change();
assert.equal(departure.error, "");
assert.ok(env.context.localDate().match(/^\d{4}-\d{2}-\d{2}$/));

console.log("Passed: 11 routes over HTTP and file preview, image paths, FAQs, enquiry parameters, mobile tour states and date validation.");

const carousel = harness();
let cardWidth = 300;
const track = Object.assign(new EventTarget(), {
  scrollLeft: 0,
  children: [],
  appendChild(card) { this.children.push(card); },
  scrollTo({ left }) { this.scrollLeft = Math.round(left); },
});
function review() {
  const classes = new Set();
  return Object.assign(new EventTarget(), {
    classList: {
      toggle(name, selected) { if (selected) classes.add(name); else classes.delete(name); },
      contains(name) { return classes.has(name); },
    },
    get offsetLeft() { return track.children.indexOf(this) * cardWidth; },
    cloneNode() { return review(); },
    setAttribute(name, value) { this[name] = value; },
    matches() { return false; },
    remove() { track.children.splice(track.children.indexOf(this), 1); },
  });
}
for (let i = 0; i < 4; i++) track.appendChild(review());
// Object.assign evaluates getters, so define live layout measurements explicitly.
for (const card of track.children) {
  Object.defineProperty(card, "offsetLeft", { configurable: true, get() { return track.children.indexOf(this) * cardWidth; } });
}
track.appendChild = function(card) {
  Object.defineProperty(card, "offsetLeft", { configurable: true, get() { return track.children.indexOf(this) * cardWidth; } });
  this.children.push(card);
};
const section = Object.assign(new EventTarget(), { querySelector: () => track });
const frames = new Map();
let frameId = 0;
let time = 0;
carousel.document.querySelector = () => section;
carousel.context.window.requestAnimationFrame = (callback) => {
  frames.set(++frameId, callback);
  return frameId;
};
carousel.context.window.cancelAnimationFrame = (id) => frames.delete(id);
const tick = (elapsed = 30) => {
  assert.equal(frames.size, 1);
  const [id, callback] = frames.entries().next().value;
  frames.delete(id);
  time += elapsed;
  callback(time);
};
const emit = (target, name, properties = {}) => {
  const event = new Event(name);
  Object.assign(event, properties);
  target.dispatchEvent(event);
};
const dispose = carousel.context.bindTestimonialsCarousel();
assert.equal(track.children.length, 8, "Duplicate reviews make the loop seamless");
assert.equal(track.children[4]["aria-hidden"], "true", "Copies are hidden from assistive technology");
assert.equal(track.children[4]["tabindex"], "-1", "Copies are not keyboard focus stops");
const selectedCards = () => track.children.flatMap((card, i) => card.classList.contains("review-selected") ? [i] : []);
assert.deepEqual(selectedCards(), [], "All reviews start blue");
emit(track.children[1], "click");
assert.deepEqual(selectedCards(), [1, 5], "Selecting a review also updates its loop copy");
assert.equal(track.children[1]["aria-pressed"], "true");
emit(track.children[6], "click");
assert.deepEqual(selectedCards(), [2, 6], "Clicking a copy replaces the previous selection");
assert.equal(track.children[1]["aria-pressed"], "false");
emit(track.children[0], "keydown", { key: "Enter" });
assert.deepEqual(selectedCards(), [0, 4], "Keyboard users can select a review");
emit(track.children[0], "keydown", { key: " " });
assert.deepEqual(selectedCards(), [], "Selecting the same review again clears the highlight");
tick(0);
for (let i = 0; i < 100; i++) tick();
assert.equal(track.scrollLeft, 90, "Steady 30px per second, including fractional pixels");
emit(track.children[0], "pointerenter", { pointerType: "mouse" });
for (let i = 0; i < 100; i++) tick();
assert.equal(track.scrollLeft, 90, "Hover freezes the review");
emit(track.children[0], "pointerleave", { pointerType: "mouse" });
tick();
assert.equal(track.scrollLeft, 91, "Leaving resumes immediately without catching up");
emit(section, "focusin");
emit(track, "pointerdown");
emit(track.children[0], "pointerenter", { pointerType: "touch" });
for (let i = 0; i < 10; i++) tick();
assert.ok(track.scrollLeft > 91, "Focus and touch do not pause rotation");
emit(track.children[4], "pointerenter", { pointerType: "mouse" });
const pausedAt = track.scrollLeft;
tick();
assert.equal(track.scrollLeft, pausedAt, "Duplicate reviews also pause on hover");
emit(track.children[4], "pointerleave", { pointerType: "mouse" });
track.scrollLeft = 1199;
tick(60);
assert.ok(track.scrollLeft <= 2, "Loop wraps directly into the identical first review");
emit(track, "carouselstep", { detail: -1 });
assert.ok(track.scrollLeft >= 900, "Previous arrow wraps backwards");
cardWidth = 240;
tick();
assert.ok(track.scrollLeft < 960, "The loop adapts to resized cards");
dispose();
assert.equal(frames.size, 0, "Route cleanup cancels animation");
assert.equal(track.children.length, 4, "Route cleanup removes duplicate reviews");
emit(track.children[0], "pointerleave", { pointerType: "mouse" });
assert.equal(frames.size, 0);
console.log("Passed: continuous speed, seamless looping, hover-only pause, arrows, resize and cleanup.");
