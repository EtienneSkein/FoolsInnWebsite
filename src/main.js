const navItems = [
  ["Home", "/"],
  ["Stay", "/rooms"],
  ["Experiences", "/tours"],
  ["Neighbourhood", "/neighbourhood"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
  ["Blog", "/blog"],
  ["Book Now", "/book-now"],
];

const ponyUpInstagram = "https://www.instagram.com/_p0nyup_/";
const onlyFoolsUrl = "https://onlyfools.co.za/";

const rooms = [
  ["Private Room", "Private stay", "Made for guests who like their own space without missing out on the atmosphere. Smart TV, personal fridge, en-suite bathroom and an easy Sea Point reset.", "fools-inn-2189.jpg", ["Double bed", "Table & chair", "Wardrobe", "En-suite bathroom", "WiFi", "TV"]],
  ["Mixed Dorm", "Sleeps 5", "A shared accommodation option within a hotel setting, designed for comfort, cleanliness and a social atmosphere without sacrificing quality.", "fools-inn-2377.jpg", ["Bunk beds", "Table & chair", "Wardrobe", "WiFi", "En-suite bathroom"]],
  ["Female-Only Dorm", "Shared stay", "A comfortable, secure shared stay for solo travellers who want hotel ease with a social feel. Includes balcony access for a bit of extra breathing room.", "fools-inn-2892.jpg", ["Kitchen section", "Bunk bed", "Table & chair", "Wardrobe", "WiFi", "Balcony", "En-suite bathroom"]],
];

const tours = [
  {
    title: "Private Surf Experience",
    category: "Ocean & Adventure",
    price: "R3,600",
    voucher: `Beer and burger at ${onlyFools()}`,
    duration: "4-5 hour half-day tour",
    tag: "Waves chased daily",
    description: "Private and exclusive surf sessions with Cape Town's premier surf school and tour operator, from complete beginners to experienced surfers.",
    details: ["Private surf van transport", "1.5-hour personalised surf lesson", "Premium gear included", "Photos captured by your coach"],
  },
  {
    title: "Shark Cage Diving",
    category: "Ocean & Adventure",
    price: "R4,655",
    voucher: `Palamo and pizza at ${ponyUp()}`,
    duration: "4 hours",
    tag: "Kleinbaai adrenaline",
    description: "Come face-to-face with the ocean's apex predators on a guided great white shark experience from The Great White House.",
    details: ["Marine biologist guidance", "Meal and onboard refreshments", "Wetsuit, booties, mask and towel", "Weather and tide dependent"],
  },
  {
    title: "Marine Big 5 / Whale Watching",
    category: "Ocean & Adventure",
    price: "R2,340 + R150 conservation fee",
    voucher: "Food and beverage voucher included",
    duration: "45 min meeting + 2h30 at sea",
    tag: "Dyer Island route",
    description: "A wildlife photography favourite through Dyer Island and Shark Alley, with chances to spot whales, dolphins, seals, penguins and sharks.",
    details: ["Tea, coffee and muffins on arrival", "Water, towels and blankets onboard", "Soup and bread after the trip", "Best whale season: June-December"],
  },
  {
    title: "Kayak & Sauna",
    category: "Ocean & Adventure",
    price: "R850",
    voucher: "Bagel and coffee at Prom Park",
    duration: "2 hours",
    tag: "Ocean meets recovery",
    description: "A coastal ritual combining Atlantic kayaking with SaunaHaus hot-and-cold Scandinavian Saunagus on the promenade.",
    details: ["Kayak, paddles and safety gear", "Local wildlife/adventure guides", "Shower facilities", "Transport excluded; 5-min Uber recommended"],
  },
  {
    title: "Kayak Standalone",
    category: "Ocean & Adventure",
    price: "R600",
    voucher: "Bagel and coffee at Prom Park",
    duration: "2 hours",
    tag: "Sea Point Promenade",
    description: "Escape into nature from the promenade next to Green Point Lighthouse, with dolphins, penguins, seals, whales and sunfish on the possible guest list.",
    details: ["Expert ocean guides", "Friendly and inclusive experience", "Year-round, weather dependent", "R700 from October"],
  },
  {
    title: "Lion's Head Sunrise or Sunset Hike",
    category: "Ocean & Adventure",
    price: "R1,200",
    voucher: "Food and beverage voucher included",
    duration: "3-4 hour round trip",
    tag: "Views, torches, tea",
    description: "A guided hike to Cape Town's famous sunrise or sunset viewpoint, with summit photos and a quieter tea/coffee stop on the way down.",
    details: ["Qualified tour guide", "Head torches and safety equipment", "Coffee, tea, biscuits and fruit", "Average fitness required"],
  },
  {
    title: "Cape Peninsula Small-Group Day Trip",
    category: "Social & Sunset",
    price: "Price TBC",
    voucher: "Food and beverage voucher included",
    duration: "Full day, capped at 10",
    tag: "Social & sunset",
    description: "A flexible small-group day trip for guests who want Cape Town scenery without being folded into a bus-load of forty.",
    details: ["Small group format", "Cape Peninsula route", "Local guide details TBC", "Final itinerary to be supplied"],
  },
  {
    title: "Stellenbosch Wine & Work",
    category: "Work & Wander",
    price: "Price TBC",
    voucher: "Food and beverage voucher included",
    duration: "Full day with WiFi-guaranteed stop",
    tag: "Work & wander",
    description: "A digital-nomad friendly wine country day that leaves room for laptop hours, good coffee and a better story than another cafe day.",
    details: ["WiFi-guaranteed work stop", "Stellenbosch route", "Wine and work format", "Final itinerary to be supplied"],
  },
  {
    title: "Boerie & Games",
    category: "Social & Sunset",
    price: "R300",
    voucher: `Hosted at ${ponyUp()}`,
    duration: "Tuesdays",
    tag: "Content coming",
    description: `A Tuesday ${ponyUp()} social built around boerie, games and a little planned nonsense. Full copy still to be supplied.`,
    details: ["Copy outstanding", "Marge to create", "Good fit for the Fools Inn social calendar", "Booking details TBC"],
  },
  {
    title: "Skydiving",
    category: "Ocean & Adventure",
    price: "R3,950",
    voucher: "Food and beverage voucher included",
    duration: "Approximately 2 hours",
    tag: "10,000ft decision",
    description: "Tandem skydive from 10,000ft with a 40-second freefall and a 6-7 minute parachute flight.",
    details: ["Safety briefing", "All necessary equipment", "Transport excluded", "Camera packages excluded"],
  },
  {
    title: "Paragliding",
    category: "Ocean & Adventure",
    price: "R1,900 pp",
    voucher: "Food and beverage voucher included",
    duration: "1 hour",
    tag: "Signal Hill or Lion's Head",
    description: "A tandem training flight with experienced instructors. Launch site and flight time depend on Cape Town's very opinionated wind.",
    details: ["Lift back up to vehicle included", "Optional photos: R350", "All year, weather dependent", "Hi-res imagery available"],
  },
  {
    title: "Kruger on the GO",
    category: "Work & Wander",
    price: "2026: R11,850 sharing / R12,750 single",
    voucher: "Food and beverage voucher included",
    duration: "2 nights / 3 days",
    tag: "Big 5 country",
    description: "Shared road transfer from OR Tambo, two nights in a tented camp, all meals and daily open-vehicle safari drives.",
    details: ["Shared return road transfer", "All meals and tea/coffee", "Two afternoon/evening game drives", "Two morning game drives"],
  },
  {
    title: "3-Day Sossusvlei Budget Camping Safari",
    category: "Work & Wander",
    price: "N$12,000 pp sharing",
    voucher: "Food and beverage voucher included",
    duration: "3 days / 2 nights",
    tag: "Namib Desert",
    description: "Small-group camping safari from Windhoek to Swakopmund through Sesriem, Dune 45, Sossusvlei, Dead Vlei and Walvis Bay.",
    details: ["Professional English-speaking guide", "Twin-share camping", "Meals and park entry fees", "Wednesday weekly departure"],
  },
  {
    title: "3-Day Etosha Budget Camping Safari",
    category: "Work & Wander",
    price: "N$12,000 pp sharing",
    voucher: "Food and beverage voucher included",
    duration: "3 days / 2 nights",
    tag: "Etosha wildlife",
    description: "Small-group camping safari from Swakopmund to Windhoek, focused on Etosha National Park game drives and waterhole viewing.",
    details: ["Professional English-speaking guide", "Full-day Etosha open game viewer drive", "Twin-share camping", "Saturday weekly departure"],
  },
  {
    title: "Township Walking Tour",
    category: "Social & Sunset",
    price: "R950 pp",
    voucher: "Food and beverage voucher included",
    duration: "Morning or afternoon",
    tag: "Langa on foot",
    description: "A walking tour with a local guide in Langa, Cape Town's oldest township, exploring community history and present-day life.",
    details: ["Pickup and return transfer included", "Langa museum and family visits", "Community projects", "Sundays may include gospel/church visit"],
  },
  {
    title: "Township Cycle Tour",
    category: "Social & Sunset",
    price: "R1,150 pp",
    voucher: "Food and beverage voucher included",
    duration: "Approximately 3 hours cycling",
    tag: "Langa by bike",
    description: "Cycle through Langa with a local guide, visiting cultural stops, family homes, traditional beer tasting and township landmarks.",
    details: ["Pickup and return transfer included", "Langa Museum and Cultural Centre", "Taxi rank and old hostels", "Traditional beer tasting"],
  },
];

const contactDetails = {
  address: "82 Regent Road, Sea Point",
  phone: "+27 (81) 601-8230",
  phoneHref: "tel:+27816018230",
  email: "info@foolsinn.co.za",
  emailHref: "mailto:info@foolsinn.co.za",
};

const socialLinks = [
  ["Facebook", "https://www.facebook.com/people/Sea-Point-Holiday-Hotel/100063616450292/"],
];

const blogPosts = [
  {
    title: "FOOLS INN - SEA POINT",
    date: "22 January 2026",
    category: "Stay",
    image: "blog-fools-inn-sea-point.jpg",
    source: "https://foolsinn.co.za/elementor-550/",
    excerpt: "A social hotel in the heart of Sea Point, made for travellers who value comfort, location and atmosphere.",
    body: [
      "Welcome to Fools Inn, a modern hotel in Sea Point designed for travellers who value comfort, location, and atmosphere. Whether you are visiting Cape Town for work, leisure, or a bit of both, Fools Inn offers an easy, relaxed base in one of the city's most walkable neighbourhoods.",
      "Choose between private rooms and select dorm-style accommodation, all designed with the same attention to comfort and simplicity.",
      `Just upstairs, ${ponyUp("Pony Up Rooftop Bar")} brings guests together over sunset drinks, music, and easy conversation - making Fools Inn more than just a place to stay.`,
      "Stay well. Meet easily. Explore freely.",
    ],
  },
];

const gallery = [
  ["Sea Point", "sea-point.jpg", ""],
  ["Front Door", "fools-inn-2331.jpg", ""],
  ["Bunk Logic", "fools-inn-2377.jpg", ""],
  ["Kitchen", "kitchen.jpg", ""],
  ["Table Mountain", "table-mountain.jpg", ""],
  ["Clifton", "clifton.jpg", ""],
];

const liveGalleryImages = [
  "2k6a2135-1.jpg", "2k6a2137-1.jpg", "2k6a2138-1.jpg", "2k6a2139-1.jpg", "2k6a2140-1.jpg", "2k6a2141-1.jpg",
  "2k6a2142-1.jpg", "2k6a2143.jpg", "2k6a2144.jpg", "2k6a2145-1.jpg", "2k6a2148.jpg", "2k6a2149.jpg",
  "2k6a2151-1.jpg", "2k6a2153-1.jpg", "2k6a2155.jpg", "2k6a2158.jpg", "2k6a2159.jpg", "2k6a2165.jpg",
  "2k6a2167.jpg", "2k6a2168.jpg", "2k6a2169.jpg", "2k6a2172.jpg", "2k6a2175-1.jpg", "2k6a2176.jpg",
  "2k6a2178-1.jpg", "2k6a2181.jpg", "2k6a2184.jpg", "2k6a2186.jpg", "2k6a2189.jpg", "2k6a2190.jpg",
  "2k6a2191.jpg", "2k6a2193.jpg", "2k6a2195.jpg", "2k6a2196.jpg", "2k6a2197.jpg", "2k6a2199.jpg",
  "2k6a2202.jpg", "2k6a2203.jpg", "2k6a2207.jpg", "2k6a2210.jpg", "2k6a2211.jpg", "2k6a2212.jpg",
  "2k6a2215.jpg", "2k6a2217.jpg", "2k6a2219.jpg", "2k6a2220.jpg", "2k6a2223.jpg", "2k6a2227.jpg",
  "2k6a2229.jpg", "2k6a2231.jpg", "2k6a2234.jpg", "2k6a2236.jpg", "2k6a2238.jpg", "2k6a2241.jpg",
  "2k6a2243.jpg", "2k6a2244.jpg", "2k6a2245.jpg", "2k6a2249.jpg", "2k6a2250.jpg", "2k6a2251.jpg",
  "2k6a2252.jpg", "2k6a2312-1.jpg", "2k6a2319.jpg", "2k6a2324.jpg", "2k6a2331-1.jpg", "2k6a2336-1.jpg",
  "2k6a2365-1.jpg", "2k6a2377-1.jpg", "2k6a2396-1.jpg", "2k6a2413-1.jpg", "2k6a2429-1.jpg", "2k6a2432.jpg",
  "2k6a2447.jpg", "2k6a2480.jpg", "2k6a2503.jpg", "2k6a2507.jpg", "2k6a2513.jpg", "2k6a2519.jpg",
  "2k6a2552.jpg", "2k6a2628.jpg", "2k6a2629.jpg", "2k6a2641.jpg", "2k6a2648.jpg", "2k6a2661.jpg",
  "2k6a2671.jpg", "2k6a2689.jpg", "2k6a2697.jpg", "2k6a2702.jpg", "2k6a2719.jpg", "2k6a2740.jpg",
  "2k6a2749.jpg", "2k6a2760.jpg", "2k6a2766.jpg", "2k6a2774.jpg", "2k6a2786.jpg", "2k6a2790.jpg",
  "2k6a2791.jpg", "2k6a2798.jpg", "2k6a2802.jpg", "2k6a2831.jpg", "2k6a2832.jpg", "2k6a2840.jpg",
  "2k6a2842.jpg", "2k6a2847.jpg", "2k6a2850.jpg", "2k6a2859.jpg", "2k6a2865.jpg", "2k6a2869.jpg",
  "2k6a2885.jpg", "2k6a2892-1.jpg", "2k6a2900.jpg", "2k6a2916.jpg", "2k6a2934.jpg", "2k6a2977.jpg",
  "2k6a3044.jpg", "2k6a3071.jpg", "2k6a3083.jpg", "2k6a3085.jpg", "2k6a3105.jpg", "2k6a3130.jpg",
  "2k6a3140.jpg", "2k6a3153.jpg", "2k6a3158.jpg", "2k6a3171.jpg", "2k6a3180.jpg", "2k6a3217.jpg",
  "2k6a3228.jpg", "2k6a3315.jpg", "2k6a3337.jpg", "2k6a3407.jpg", "2k6a3443.jpg", "2k6a3459.jpg",
  "2k6a3476.jpg", "2k6a3486.jpg", "2k6a3511.jpg", "2k6a3514.jpg",
];
const activitarUrl = "https://activitar.com/";
const root = document.getElementById("root");

function asset(file) {
  const scriptSource = document.currentScript?.getAttribute("src") || "";
  const base = window.__CLIENT_PREVIEW_ASSET_BASE__ || (scriptSource.includes("ignore/src") ? "ignore/src/assets/old-site" : "src/assets/old-site");

  if (location.protocol === "file:") {
    return new URL(`${base}/${file}`, location.href).href;
  }

  if (window.__CLIENT_PREVIEW_ASSET_BASE__) {
    return `${base}/${file}`;
  }

  return `/src/assets/old-site/${file}`;
}

function ponyUp(label = "Pony Up") {
  return `<a class="inline-link" href="${ponyUpInstagram}" target="_blank" rel="noopener">${label}</a>`;
}

function onlyFools(label = "Only Fools") {
  return `<a class="inline-link" href="${onlyFoolsUrl}" target="_blank" rel="noopener">${label}</a>`;
}

function icon(name) {
  const paths = {
    arrow: "M5 12h14M13 5l7 7-7 7",
    bed: "M3 11V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6M13 11V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4M3 21v-8h18v8M3 17h18",
    calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM9 16l2 2 4-5",
    camera: "M14.5 4 16 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l1.5-3h5ZM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
    chevron: "m9 18 6-6-6-6",
    compass: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM16 8l-2.2 5.8L8 16l2.2-5.8L16 8Z",
    mail: "M4 4h16v16H4V4Zm0 2 8 7 8-7",
    map: "M12 22s7-5.2 7-12a7 7 0 0 0-14 0c0 6.8 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    menu: "M4 7h16M4 12h16M4 17h16",
    phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z",
    sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z",
    social: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z",
    x: "M6 6l12 12M18 6 6 18",
  };
  return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name] || paths.sparkle}"></path></svg>`;
}

function layout(content) {
  const current = normalize(location.pathname);
  root.innerHTML = `
    <header class="site-header">
      <a class="brand" href="/" data-link aria-label="Fools Inn home"><span class="brand-mark">F</span><span>Fools Inn</span></a>
      <nav class="nav" aria-label="Main navigation">
        ${navItems.map(([label, href]) => `<a class="${current === href ? "active" : ""}" href="${href}" data-link>${label}</a>`).join("")}
      </nav>
      <a class="book-link" href="/book-now" data-link>Book now</a>
      <button class="menu-button" type="button" aria-label="Toggle navigation">${icon("menu")}</button>
    </header>
    <main>${content}</main>
    ${footer()}
  `;
  bindLinks();
}

function bindLinks() {
  document.querySelectorAll("[data-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const href = link.getAttribute("href");
      if (location.protocol === "file:") {
        location.hash = href;
      } else {
        history.pushState({}, "", href);
      }
      render();
      scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".nav");
  menuButton?.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    menuButton.innerHTML = nav.classList.contains("nav-open") ? icon("x") : icon("menu");
  });
}

function homePage() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Sea Point * Cape Town</p>
        <h1>Backpacker energy. Boutique comfort.</h1>
        <p>Perched above Cape Town's favourite local bar, right on the Sea Point promenade; Fools Inn is where you land for a night and end up staying for a week.</p>
        <div class="hero-actions">
          <a class="primary-button" href="/book-now" data-link>Book your stay ${icon("arrow")}</a>
          <a class="secondary-button" href="/tours" data-link>Explore experiences</a>
        </div>
      </div>
      <div class="hero-visual" aria-label="Fools Inn guesthouse preview">
        <div class="visual-card visual-main photo-panel" style="--photo: url('${asset("fools-inn-2331.jpg")}')"><span>FOOLS IN SEA POINT</span></div>
        <div class="visual-card visual-small logo-card"><img src="${asset("logo-white.png")}" alt="Fools Inn"></div>
      </div>
    </section>
    <section class="intro-strip" aria-label="Site sections">
      ${stat("bed", "Private en-suite", "Your own room. Your own lock.")}
      ${stat("compass", "Ocean two minutes away", "Promenade, surf, sunset, repeat.")}
      ${stat("calendar", `${ponyUp("Pony Up rooftop")}`, "Meet people, keep your privacy.")}
    </section>
    <section class="proof-strip">
      <p>Don't take our word for it. Thousands of happy guests have stayed with Fools Inn since 2021.</p>
      <span>★★★★★</span>
    </section>
    ${introSection()}
    ${pillars()}
    ${section("Stay", "Simple rooms in the heart of Sea Point.", roomCards() + `<a class="text-link" href="/rooms" data-link>Explore accommodation ${icon("arrow")}</a>`)}
    ${toursPreview()}
    ${neighbourhoodPreview()}
    ${tourFaqs()}
    ${galleryPage(true)}
    ${bookingPage(true)}
  `;
}

function roomsPage() {
  return pageShell("Stay", "You've outgrown the 20-bed dorm.", `You still want the people, the stories, and the energy - just with a door that locks and a bed that's yours. Fools Inn gives you private en-suite rooms above ${onlyFools()}, with ${ponyUp("Pony Up Rooftop Bar")} close enough when you want the scene.`, roomCards());
}

function toursPage() {
  const groups = ["Ocean & Adventure", "Social & Sunset", "Work & Wander"].map((category) => {
    const cards = tours.filter((tour) => tour.category === category).map((tour) => tourCard(tour)).join("");
    return `<section class="tour-group"><p class="eyebrow">${category}</p><div class="tour-card-grid">${cards}</div></section>`;
  }).join("");
  return pageShell("Experiences", "Cape Town experiences, booked from your Sea Point base.", "Small groups, active days, ocean routes and local favourites shaped for guests who want more than a bed. Each Fools Inn experience includes a food or beverage voucher where noted.", `${groups}<section class="closing-cta"><h2>Ready to plan the day?</h2><p>Ask at reception or book below to lock your spot.</p><a class="primary-button" href="/book-now" data-link>Book an experience ${icon("arrow")}</a></section>${tourFaqs()}`);
}

function tourCard(tour) {
  return `
    <article class="tour-card">
      <div class="tour-image photo-panel" style="--photo: url('${asset(tourImage(tour))}')"></div>
      <div class="tour-card-body">
        <p>${tour.tag}</p>
        <h3>${tour.title}</h3>
        <div class="tour-meta">
          <strong>${tour.price}</strong>
          <span>${tour.duration}</span>
        </div>
        <span>${tour.description}</span>
        <div class="voucher-strip">${tour.voucher}</div>
        <ul>
          ${tour.details.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <a href="/book-now" data-link>Book via Activitar</a>
      </div>
    </article>
  `;
}

function galleryPage(compact = false) {
  const images = compact ? gallery.slice(0, 6) : liveGalleryImages.map((file, index) => [`Fools Inn ${index + 1}`, file, "gallery"]);
  return pageShell(
    "Gallery",
    compact ? "Shot like a phone gallery, not a studio." : "Unfiltered, loud, trendy and a little random.",
    compact ? "" : "The full gallery from the live Fools Inn site, carried over here as lazy-loaded mobile-friendly tiles.",
    `<div class="${compact ? "gallery-grid" : "live-gallery-grid"}">${images.map(([label, image, dir], index) => galleryTile(label, image, dir, index, compact)).join("")}</div>`
  );
}

function contactPage() {
  return `
    <section class="contact-section page-contact">
      <div>
        <p class="eyebrow">Contact</p>
        <h2>We would love to hear from you.</h2>
        <p>Need a room, a route, or help getting your stay together? Use the live Fools Inn contact details below.</p>
        ${contactCards()}
      </div>
      ${contactForm()}
    </section>
  `;
}

function blogPage() {
  return pageShell(
    "Blog",
    "Field notes from Sea Point.",
    "The live Fools Inn blog content, brought into the new site and shaped for easier reading on mobile.",
    `<div class="blog-row">${blogPosts.map((post) => blogArticle(post)).join("")}</div>`
  );
}

function bookingPage(compact = false) {
  return `
    <section class="${compact ? "booking-section" : "booking-section page-booking"}">
      <div>
        <p class="eyebrow">Book Now</p>
        <h2>Book the room. Chase the sun.</h2>
        <p>Booking links, tour widgets and direct calls to action will sit here once the final Activitar details are supplied.</p>
      </div>
      <a class="primary-button" href="${activitarUrl}" target="_blank" rel="noopener" aria-label="Start booking on Activitar">Start booking ${icon("arrow")}</a>
    </section>
  `;
}

function roomCards() {
  return `<div class="card-grid">${rooms.map(([title, tag, detail, image, amenities]) => `
    <article class="room-card">
      <div class="room-image photo-panel" style="--photo: url('${asset(image)}')"></div>
      <div class="room-card-body">
        <p>${tag}</p>
        <h3>${title}</h3>
        <span>${detail}</span>
        <div class="amenity-list">${amenities.map((item) => `<small>${item}</small>`).join("")}</div>
      </div>
    </article>
  `).join("")}</div>`;
}

function toursPreview() {
  const featured = ["Private Surf Experience", "Lion's Head Sunrise or Sunset Hike", "Cape Peninsula Small-Group Day Trip", "Stellenbosch Wine & Work"];
  return `
    <section class="split-section">
      <div>
        <p class="eyebrow">Experiences</p>
        <h2>Active Cape Town days, easy to book from your stay.</h2>
        <p>Ocean mornings, sunset hikes, wine-and-work days, and social routes that feel more like a good tip than a brochure.</p>
      </div>
      <div class="tour-list">
        ${tours.filter((tour) => featured.includes(tour.title)).map((tour) => `<a href="/tours" data-link><span>${tour.title}</span><small>${tour.duration}</small>${icon("chevron")}</a>`).join("")}
      </div>
    </section>
  `;
}

function contactForm() {
  return `
    <form class="contact-form">
      <label>Name<input type="text" placeholder="Guest name"></label>
      <label>Email<input type="email" placeholder="guest@example.com"></label>
      <label>Message<textarea placeholder="Tell us what you need"></textarea></label>
      <a class="form-button" href="${contactDetails.emailHref}">Send enquiry</a>
    </form>
  `;
}

function contactCards() {
  return `
    <div class="contact-card-grid">
      <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}" target="_blank" rel="noopener">${icon("map")}<span><strong>Our Location</strong>${contactDetails.address}</span></a>
      <a href="${contactDetails.phoneHref}">${icon("phone")}<span><strong>Our Phone</strong>${contactDetails.phone}</span></a>
      <a href="${contactDetails.emailHref}">${icon("mail")}<span><strong>Mail Address</strong>${contactDetails.email}</span></a>
      ${socialLinks.map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener">${icon("social")}<span><strong>Social</strong>${label}</span></a>`).join("")}
    </div>
  `;
}

function blogArticle(post) {
  return `
    <article class="blog-article">
      <div class="blog-image photo-panel" style="--photo: url('${asset(post.image)}')"></div>
      <div class="blog-content">
        <span>${post.category} / ${post.date}</span>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        ${post.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
    </article>
  `;
}

function galleryTile(label, image, dir, index, compact) {
  const src = asset(dir ? `${dir}/${image}` : image);
  if (compact) {
    return `<div class="gallery-tile tile-${index + 1} photo-panel" style="--photo: url('${src}')">${icon("camera")}<span>${label}</span></div>`;
  }
  return `
    <figure class="live-gallery-tile tile-${index + 1}">
      <img src="${src}" alt="${label}" loading="${index < 6 ? "eager" : "lazy"}" decoding="async">
    </figure>
  `;
}

function introSection() {
  return `
    <section class="intro-copy">
      <p>You've outgrown the 20-bed dorm. You still want the people, the stories, and the energy - just with a door that locks and a bed that's yours.</p>
      <p>Fools Inn gives you both: private en-suite rooms, a rooftop bar full of new friends, and the ocean two minutes from your door.</p>
    </section>
  `;
}

function pillars() {
  const items = [
    ["Work by day", "Fast WiFi, proper desks, and a five-minute walk to Sea Point's best coffee. Built for the traveller who still has a job to do."],
    ["Wander by dusk", "Surf breaks, sunset hikes, and the promenade right outside; Fools Inn puts the outdoors within arm's reach."],
    ["Meet people, keep your privacy", `Come up to ${ponyUp("Pony Up Rooftop Bar")} for the community. Go back to your own private room when you're done. No forced dorm small talk required.`],
  ];
  return `<section class="pillar-grid">${items.map(([title, text]) => `<article><p class="eyebrow">[ ${title} ]</p><h3>${title}</h3><span>${text}</span></article>`).join("")}</section>`;
}

function neighbourhoodPreview() {
  return `
    <section class="neighbourhood-band">
      <div>
        <p class="eyebrow">The Neighbourhood</p>
        <h2>Sea Point is the real lobby.</h2>
        <p>Cafes, gyms, coworking, surf checks and promenade laps sit close enough to become part of the stay.</p>
      </div>
      <div class="neighbourhood-photo photo-panel" style="--photo: url('${asset("sea-point.jpg")}')" aria-label="Sea Point promenade"></div>
      <a class="secondary-button" href="/neighbourhood" data-link>Explore Sea Point</a>
    </section>
  `;
}

function neighbourhoodPage() {
  return pageShell(
    "The Neighbourhood",
    "Work by day, wander by dusk.",
    "Sea Point gives Fools Inn its edge: promenade mornings, cafes for laptop hours, gyms for routine, ocean access for active travellers, and enough bar energy to make a Tuesday feel planned.",
    `<div class="neighbourhood-hero photo-panel" style="--photo: url('${asset("sea-point.jpg")}')" aria-label="Sea Point promenade"></div>
    <div class="neighbourhood-grid">
      <article><p class="eyebrow">[ Coffee ]</p><h3>Five-minute laptop fuel</h3><span>Nearby cafes make the digital-nomad rhythm easy: work, refill, walk, repeat.</span></article>
      <article><p class="eyebrow">[ Promenade ]</p><h3>Two minutes to the ocean</h3><span>Surf partnerships, kayak mornings, sunset walks and the Atlantic right outside.</span></article>
      <article><p class="eyebrow">[ Social ]</p><h3>${onlyFools("Only Fools downstairs")}</h3><span>A proper local bar base without forcing anyone into dorm-hostel chaos.</span></article>
    </div>`
  );
}

function tourFaqs() {
  return `
    <section class="faq-strip">
      <div>
        <p class="eyebrow">[ Tour FAQs ]</p>
        <h2>Good to know before you say yes.</h2>
      </div>
      <div class="faq-list">
        <article><strong>Are tours weather dependent?</strong><span>Many outdoor and ocean tours are weather dependent. Launch and start times may be confirmed the day before.</span></article>
        <article><strong>Is the voucher included?</strong><span>Yes. The tour content notes a food and beverage voucher as a key Fools Inn differentiator.</span></article>
        <article><strong>Where do bookings happen?</strong><span>Final booking buttons will link through Activitar once the exact product links or embed code are supplied.</span></article>
      </div>
    </section>
  `;
}

function pageShell(eyebrow, title, intro, children) {
  return `
    <section class="section page-shell">
      <div class="section-heading">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        ${intro ? `<p>${intro}</p>` : ""}
      </div>
      ${children}
    </section>
  `;
}

function section(eyebrow, title, children) {
  return `<section class="section"><div class="section-heading"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2></div>${children}</section>`;
}

function tourImage(tour) {
  if (/surf|kayak/i.test(tour.title)) return "sea-point.jpg";
  if (/shark|marine|whale/i.test(tour.title)) return "clifton.jpg";
  if (/lion|table|paragliding|skydiving/i.test(tour.title)) return "table-mountain.jpg";
  if (/peninsula/i.test(tour.title)) return "waterfront.jpg";
  if (/township|boerie/i.test(tour.title)) return "fools-inn-123.jpg";
  if (/stellenbosch|wine/i.test(tour.title)) return "clifton.jpg";
  return "waterfront.jpg";
}

function stat(iconName, label, value) {
  return `<div class="stat">${icon(iconName)}<div><strong>${label}</strong><span>${value}</span></div></div>`;
}

function footer() {
  return `
    <footer class="footer">
      <div><strong>Fools Inn</strong><span>Sea Point * Cape Town</span></div>
      <div class="footer-links">
        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}" target="_blank" rel="noopener">${icon("map")} ${contactDetails.address}</a>
        <a href="${contactDetails.emailHref}">${icon("mail")} ${contactDetails.email}</a>
        <a href="${contactDetails.phoneHref}">${icon("phone")} ${contactDetails.phone}</a>
        ${socialLinks.map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener">${icon("social")} ${label}</a>`).join("")}
      </div>
    </footer>
  `;
}

function render() {
  const path = normalize(currentPath());
  const pages = {
    "/": homePage,
    "/rooms": roomsPage,
    "/tours": toursPage,
    "/neighbourhood": neighbourhoodPage,
    "/gallery": () => galleryPage(false),
    "/contact": contactPage,
    "/blog": blogPage,
    "/book-now": () => bookingPage(false),
  };
  layout((pages[path] || homePage)());
}

function currentPath() {
  if (location.protocol === "file:") {
    return location.hash.replace(/^#/, "") || "/";
  }
  return location.pathname;
}

function normalize(path) {
  return navItems.some(([, href]) => href === path) ? path : "/";
}

window.addEventListener("popstate", render);
window.addEventListener("hashchange", render);
render();
