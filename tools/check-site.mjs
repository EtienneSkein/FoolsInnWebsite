import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import vm from "node:vm";

const source = readFileSync("src/main.js", "utf8");
const index = readFileSync("index.html", "utf8");
assert.ok(index.includes('href="/src/styles.css"'), "Styles load when refreshing nested room routes");
assert.ok(index.includes('src="/src/main.js"'), "Scripts load when refreshing nested room routes");
const routes = ["/", "/rooms", "/rooms/private", "/rooms/female-dorm", "/tours", "/neighbourhood", "/gallery", "/contact", "/blog", "/faqs", "/book-now", "/terms"];

function harness(protocol = "http:", mobile = false) {
  const root = { innerHTML: "" };
  const listeners = new Map();
  const noopElement = { addEventListener() {}, setAttribute() {}, classList: { remove() {}, toggle() { return false; } }, focus() {} };
  const location = {
    protocol, pathname: "/", search: "", hash: "",
    href: protocol === "file:" ? new URL("../dist/index.html", import.meta.url).href : "http://127.0.0.1:5173/",
    redirectedTo: null,
    replace(target) { this.redirectedTo = target; },
    assign(target) { this.redirectedTo = target; },
  };
  const head = { children: [], appendChild(node) { this.children.push(node); } };
  const document = {
    title: "", currentScript: null, head,
    createElement: () => ({}),
    getElementById: () => root,
    querySelectorAll: () => [],
    querySelector: (selector) => [".contact-form", ".testimonials"].includes(selector) ? null : noopElement,
  };
  // Enough of FormData to read the booking form's own fields.
  class StubFormData {
    constructor(form) { this.form = form; }
    get(name) { return this.form.elements[name] ? this.form.elements[name].value : null; }
  }
  const context = {
    document, location, console, URL, URLSearchParams, Date, FormData: StubFormData,
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
  assert.equal((env.root.innerHTML.match(/<details><summary>/g) || []).length, 20, "All twenty FAQ questions render");
  assert.ok(env.root.innerHTML.includes("https://onlyfools.co.za/"));
  assert.ok(env.root.innerHTML.includes("https://www.instagram.com/_p0nyup_/"));
  if (protocol === "file:") env.location.hash = "#/terms";
  else env.location.pathname = "/terms";
  env.context.render();
  assert.equal((env.root.innerHTML.match(/class="faq-category"/g) || []).length, 13, "Terms reads as an accordion, like the FAQs");
  assert.ok(env.root.innerHTML.includes(vm.runInContext("stayPaymentPolicy", env.context)), "Terms and FAQ share one payment policy");
  assert.ok(env.root.innerHTML.includes("design/terms-stars.jpg"));
  assert.ok(env.document.title.includes("Terms & Conditions"));
  if (protocol === "file:") env.location.hash = "#/book-now?guests=3&checkin=2029-04-01&checkout=2029-04-05&code=%22%3E%3Cscript%3E";
  else { env.location.pathname = "/book-now"; env.location.search = "?guests=3&checkin=2029-04-01&checkout=2029-04-05&code=%22%3E%3Cscript%3E"; }
  env.context.render();
  const handoff = new URL(env.location.redirectedTo);
  assert.equal(handoff.origin + handoff.pathname, "https://us2.cloudbeds.com/en/reservation/0d7YI3", "Book Now hands off to Cloudbeds");
  assert.equal(handoff.searchParams.get("currency"), "zar");
  assert.equal(handoff.searchParams.get("adults"), "3", "The guest count travels with the booking");
  assert.equal(handoff.searchParams.get("checkin"), "2029-04-01");
  assert.equal(handoff.searchParams.get("checkout"), "2029-04-05");
  assert.ok(!env.root.innerHTML.includes("<script>"));
  assert.ok(env.root.innerHTML.includes("Taking you to our booking system"), "A fallback shows while the redirect runs");
}

for (const mobile of [false, true]) {
  const env = harness("http:", mobile);
  const items = [{}, {}, {}];
  env.document.querySelectorAll = (selector) => selector === ".tour-item" ? items : [];
  env.context.syncTourLayout();
  assert.deepEqual(items.map((item) => item.open), mobile ? [true, false, false] : [true, true, true]);
}

const env = harness();
assert.equal(
  vm.runInContext("JSON.stringify(contactDetails.coords)", env.context),
  "[-33.9212112,18.3823576]",
  "The map is pinned to 82 Regent Road as Google Maps resolves it",
);
assert.ok(env.context.contactPage().includes('id="contact-map"'), "The contact page renders a map container");
assert.ok(!env.context.contactPage().includes("<iframe"), "Google's embed, and its own pin, are gone");
assert.ok(env.context.bindMap.toString().includes("pinPath"), "A pin marks the address");
assert.ok(env.context.contactPage().includes("Open in Google Maps"));
assert.ok(!env.context.contactPage().includes("data-reload-map"), "The reload button is gone");
assert.ok(!env.context.contactPage().includes("Get directions"), "The directions link is gone");
assert.equal((env.context.contactPage().match(/icon\("star"\)|<svg/g) || []).length > 0, true);
assert.deepEqual(
  Array.from(env.context.featuredTours().matchAll(/<h3>([^<]+)<\/h3>/g), (match) => match[1]),
  ["Kayak", "Surf", "Shark Cage Diving"],
  "Homepage features the three tours in the revised design order",
);
assert.equal((env.context.toursPage().match(/class="tour-offer"/g) || []).length, 11);
assert.equal((env.context.toursPage().match(/class="tour-inclusions"/g) || []).length, 15);
const [visibleTours, hiddenTours] = env.context.toursPage().split('<div class="tour-grid" id="more-adventures" hidden>');
assert.equal((visibleTours.match(/class="tour-item"/g) || []).length, 6, "The tours page shows six tours above the See More button");
assert.ok(visibleTours.includes('data-show-more="more-adventures"'));
assert.equal((hiddenTours.match(/class="tour-item"/g) || []).length, 9, "The remaining tours stay hidden until See More is clicked");
assert.deepEqual(
  vm.runInContext("JSON.stringify(primaryNav.map(([label]) => label))", env.context),
  '["Rooms","Tours","Contact Us"]',
  "The wordmark is the only way home from the nav",
);
assert.ok(env.context.homePage().includes('class="home-photo-story"'));
assert.ok(env.context.homePage().includes("Leave a Review"));
assert.ok(env.context.testimonials().includes('href="https://www.google.com/travel/search?'));
assert.equal((env.context.testimonials().match(/class="review"/g) || []).length, 7, "All seven guest reviews are on the page");
for (const name of ["Ananya", "Willis", "Charlotte"]) {
  assert.ok(env.context.testimonials().includes("<strong>" + name + "</strong>"), name + " is quoted in the testimonials");
}
assert.ok(!env.context.homePage().includes("Backpacker energy."));
const expectedTours = [
  ["Lion's Head Hike", 49], ["Paragliding", 53], ["Shark Cage Diving", 45],
  ["Township Walking Tour", 42], ["Kayak", 55], ["Kruger on the GO", 46],
  ["Surf", 54], ["Sea Safari", 52], ["Kayak & Sauna", 50],
  ["Boerie & Games", 48], ["Skydiving", 44], ["Sossusvlei Budget Safari", 47],
  ["Etosha Budget Safari", 43], ["Township Cycle Tour", 39], ["Secret Hike", 41],
].map(([title, number]) => [title, `design/photo-${number}.jpg`]);
assert.deepEqual(
  JSON.parse(vm.runInContext("JSON.stringify(tours.map(({ title, image }) => [title, image]))", env.context)),
  expectedTours,
  "The 15 advertised tours and their photos stay in the order the client asked for",
);
const handlers = {};
const field = (value) => ({ value, addEventListener(name, fn) { handlers[name] = fn; }, setCustomValidity(message) { this.error = message; } });
const arrival = field("2028-02-29");
const departure = field("2028-02-29");
const submitHandlers = {};
const form = {
  elements: { checkin: arrival, checkout: departure, guests: field("4"), code: field("SUMMER") },
  addEventListener(name, fn) { submitHandlers[name] = fn; },
  reportValidity: () => true,
};
env.document.querySelectorAll = (selector) => selector.includes(".booking-search") ? [form] : [];
env.context.bindForms();
assert.equal(departure.min, "2028-03-01");
assert.ok(departure.error);
departure.value = "2028-03-02";
handlers.change();
assert.equal(departure.error, "");
assert.ok(env.context.localDate().match(/^\d{4}-\d{2}-\d{2}$/));

// A filled-in enquiry goes straight to Cloudbeds, in this tab.
arrival.value = "2028-03-02";
departure.value = "2028-03-06";
env.location.redirectedTo = null;
submitHandlers.submit({ preventDefault() {} });
const enquiry = new URL(env.location.redirectedTo);
assert.equal(enquiry.origin + enquiry.pathname, "https://us2.cloudbeds.com/en/reservation/0d7YI3", "Enquire redirects to Cloudbeds");
assert.equal(enquiry.searchParams.get("checkin"), "2028-03-02");
assert.equal(enquiry.searchParams.get("checkout"), "2028-03-06");
assert.equal(enquiry.searchParams.get("adults"), "4");
assert.equal(enquiry.searchParams.get("promo"), "SUMMER");
assert.equal(enquiry.searchParams.get("currency"), "zar");

console.log("Passed: 12 routes over HTTP and file preview, image paths, featured tours, offers, terms, FAQs, the Cloudbeds handoff, mobile tour states, the See More toggle and date validation.");

const carousel = harness();
let cardWidth = 300;
const trackClasses = new Set(["review-track"]);
const track = Object.assign(new EventTarget(), {
  scrollLeft: 0,
  children: [],
  classList: { contains: (name) => trackClasses.has(name) },
  hasAttribute: (name) => name === "data-carousel",
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
const dispose = carousel.context.bindCarousel(track);
assert.equal(track.children.length, 8, "Duplicate reviews make the loop seamless");
assert.equal(track.children[4]["aria-hidden"], "true", "Copies are hidden from assistive technology");
assert.equal(track.children[4]["tabindex"], "-1", "Copies are not keyboard focus stops");
const selectedCards = () => track.children.flatMap((card, i) => card.classList.contains("review-selected") ? [i] : []);
assert.deepEqual(selectedCards(), [0, 4], "The first review starts highlighted, copy included");
emit(track.children[1], "pointerenter", { pointerType: "mouse" });
assert.deepEqual(selectedCards(), [1, 5], "Hovering a review also highlights its loop copy");
emit(track.children[6], "pointerenter", { pointerType: "mouse" });
assert.deepEqual(selectedCards(), [2, 6], "Hovering a copy moves the highlight");
emit(track.children[6], "pointerleave", { pointerType: "mouse" });
assert.deepEqual(selectedCards(), [0, 4], "The highlight rests back on the first review");
emit(track.children[0], "pointerleave", { pointerType: "mouse" });
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
// The room photos ride the same carousel, minus the review highlight.
trackClasses.delete("review-track");
// dispose() leaves the resting highlight on the originals; a real route swap
// throws the nodes away, but these stubs are reused, so clear it by hand.
track.children.forEach((card) => card.classList.toggle("review-selected", false));
cardWidth = 300;
track.scrollLeft = 0;
const photoDispose = carousel.context.bindCarousel(track);
assert.equal(track.children.length, 8, "Room photos are duplicated for the loop too");
assert.deepEqual(selectedCards(), [], "Room photos take no highlight");
tick(0);
for (let i = 0; i < 100; i++) tick();
assert.equal(track.scrollLeft, 90, "Room photos rotate at the same 30px per second");
emit(track.children[0], "pointerenter", { pointerType: "mouse" });
for (let i = 0; i < 50; i++) tick();
assert.equal(track.scrollLeft, 90, "Hovering a room photo pauses the rotation");
emit(track.children[0], "pointerleave", { pointerType: "mouse" });
assert.deepEqual(selectedCards(), [], "Leaving a room photo still adds no highlight");
emit(track, "carouselstep", { detail: 1 });
assert.equal(track.scrollLeft, 390, "The arrows step room photos one card along");
photoDispose();
assert.equal(track.children.length, 4, "Cleanup removes the duplicated photos");

console.log("Passed: continuous speed, seamless looping, hover-only pause, arrows, resize and cleanup, for reviews and room photos.");
