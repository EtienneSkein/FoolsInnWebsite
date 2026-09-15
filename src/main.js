const navItems = [
  ["Home", "/"],
  ["Rooms", "/rooms"],
  ["Tours", "/tours"],
  ["Neighbourhood", "/neighbourhood"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
  ["Blog", "/blog"],
  ["FAQs", "/faqs"],
  ["Terms & Conditions", "/terms"],
  ["Book Now", "/book-now"],
];

const ponyUpInstagram = "https://www.instagram.com/_p0nyup_/";
const onlyFoolsUrl = "https://onlyfools.co.za/";
const stayPaymentPolicy = "Payment is made by bank transfer before you arrive. We'll send you everything you need once you've booked, so there's no scrambling on check-in day.";
const googleReviewUrl = "https://www.google.com/travel/search?q=foolsinn%20google%20review&g2lb=4965990%2C72471280%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121762713%2C121921501%2C121951222%2C121954673%2C122005372%2C122014428%2C122014429&hl=en-ZA&gl=za&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4MWRjYzY3YmEyZDBmZWM4MToweDExZjY0NWFkM2M1MzEyZBIaEhQKBwjqDxAJGA8SBwjqDxAJGBAYATICEAA&qs=CAEyE0Nnb0lyZUtVbnEyTDJZOEJFQUU4AkIJCS0xxdNaZB8BQgkJLTHF01pkHwE&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjo_-DzmvCWAxUAAAAAHQAAAAAQCw";

const rooms = [
  ["Private Room", "Private stay", "Made for guests who like their own space without missing out on the atmosphere. Smart TV, personal fridge, en-suite bathroom and an easy Sea Point reset.", "fools-inn-2189.jpg", ["Double bed", "Table & chair", "Wardrobe", "En-suite bathroom", "WiFi", "TV"]],
  ["Mixed Dorm", "Sleeps 5", "A shared accommodation option within a hotel setting, designed for comfort, cleanliness and a social atmosphere without sacrificing quality.", "fools-inn-2377.jpg", ["Bunk beds", "Table & chair", "Wardrobe", "WiFi", "En-suite bathroom"]],
  ["Female-Only Dorm", "Shared stay", "A comfortable, secure shared stay for solo travellers who want hotel ease with a social feel. Includes balcony access for a bit of extra breathing room.", "fools-inn-2892.jpg", ["Kitchen section", "Bunk bed", "Table & chair", "Wardrobe", "WiFi", "Balcony", "En-suite bathroom"]],
];

const tours = [
  {
    title: "Surf",
    image: designPhoto(54),
    category: "Ocean & Adventure",
    price: "R3,600 pp",
    voucher: `Beer and burger at ${onlyFools()}`,
    duration: "4-5 hour half-day tour",
    tag: "Let's catch some waves.",
    description: "New to surfing or already hooked? Your private guide will find the day's best spot, bring the gear and help you make the most of it.",
    details: ["Private surf van transport", "1.5-hour personalised surf lesson", "Premium gear included", "Photos captured by your coach"],
  },
  {
    title: "Shark Cage Diving",
    image: designPhoto(45),
    category: "Ocean & Adventure",
    price: "From R4,655 pp",
    voucher: `Beer and burger at ${onlyFools()}`,
    duration: "4 hours",
    tag: "Meet Great Whites in the Big Blue.",
    description: "Head out from Kleinbaai, suit up, and see one of the ocean's apex predators up-close.",
    details: ["Marine biologist guidance", "Meal and onboard refreshments", "Wetsuit, booties, mask and towel", "Weather and tide dependent"],
  },
  {
    title: "Sea Safari",
    image: designPhoto(52),
    category: "Ocean & Adventure",
    price: "From R2,340 pp",
    voucher: `Beer and burger at ${onlyFools()}`,
    duration: "45 min meeting + 2h30 at sea",
    tag: "Spot the Big Five of the sea.",
    description: "Cruise around Dyer Island and keep watch for whales, dolphins, seals, penguins and sharks. Bring your camera and capture more than memories.",
    details: ["R150 conservation fee applies", "Tea, coffee and muffins on arrival", "Water, towels and blankets onboard", "Soup and bread after the trip", "Best whale season: June-December"],
  },
  {
    title: "Kayak & Sauna",
    image: designPhoto(50),
    category: "Ocean & Adventure",
    price: "R850 pp",
    voucher: `Beer and burger at ${onlyFools()}`,
    duration: "2 hours",
    tag: "Paddle, sweat, chill.",
    description: "Kayak along the Atlantic coastline, then warm up with a guided sauna and ice-bath ritual at SaunaHaus on the promenade.",
    details: ["Kayak, paddles and safety gear", "Local wildlife/adventure guides", "Shower facilities", "Transport excluded; 5-min Uber recommended"],
  },
  {
    title: "Kayak",
    image: designPhoto(55),
    category: "Ocean & Adventure",
    price: "R600 pp",
    voucher: `Beer and burger at ${onlyFools()}`,
    duration: "2 hours",
    tag: "See Sea Point from the sea.",
    description: "Paddle out from the promenade and look back at the city. If you're lucky, some dolphins, seals, penguins, sunfish and whales might join you.",
    details: ["Expert ocean guides", "Friendly and inclusive experience", "Year-round, weather dependent", "R700 from October"],
  },
  {
    title: "Lion's Head Hike",
    image: designPhoto(49),
    category: "Ocean & Adventure",
    price: "R1,200 pp",
    voucher: `Beer and burger at ${onlyFools()}`,
    duration: "3-4 hour round trip",
    tag: "Get the view from the top.",
    description: "Choose sunrise or sunset, lace up and tackle Lion's Head with a qualified guide and a few future friends. Come for the views; stay for the snacks.",
    details: ["Qualified tour guide", "Head torches and safety equipment", "Coffee, tea, biscuits and fruit", "Average fitness required"],
  },
  {
    title: "Boerie & Games",
    image: designPhoto(48),
    category: "Social & Sunset",
    price: "R300 pp",
    voucher: "",
    duration: "Tuesdays",
    tag: "Come play.",
    description: `Join us at ${ponyUp()} on Tuesdays for boerie, games and a very easy way to make new friends.`,
    details: ["Tuesday social", "Boerie and games", `Hosted at ${ponyUp("Pony Up Rooftop Bar")}`],
  },
  {
    title: "Skydiving",
    image: designPhoto(44),
    category: "Ocean & Adventure",
    price: "R3,950 pp",
    voucher: `Beer and burger at ${onlyFools()}`,
    duration: "Approximately 2 hours",
    tag: "Take the leap.",
    description: "10,000-foot flying, 40-second freefall, 6-7 minutes of pure adrenaline. You'll never look at Cape Town the same again.",
    details: ["Safety briefing", "All necessary equipment", "Transport excluded", "Camera packages excluded"],
  },
  {
    title: "Paragliding",
    image: designPhoto(53),
    category: "Ocean & Adventure",
    price: "R1,900 pp",
    voucher: `Beer and burger at ${onlyFools()}`,
    duration: "1 hour",
    tag: "Take the scenic way down.",
    description: "Fly tandem from Signal Hill or Lion's Head and float above the best city (in our opinion) in the world.",
    details: ["Lift back up to vehicle included", "Optional photos: R350", "All year, weather dependent", "Hi-res imagery available"],
  },
  {
    title: "Kruger on the GO",
    image: designPhoto(46),
    category: "Work & Wander",
    price: "From R11,850 pp",
    voucher: "",
    duration: "2 nights / 3 days",
    tag: "Go wild for a few days.",
    description: "Spend two nights in a tented camp, head out on four Big Five game drives and let someone else sort the meals and transfers for you.",
    details: ["2026: R11,850 sharing / R12,750 single", "Shared return road transfer", "All meals and tea/coffee", "Two afternoon/evening game drives", "Two morning game drives"],
  },
  {
    title: "Sossusvlei Budget Safari",
    image: designPhoto(47),
    category: "Work & Wander",
    price: "From N$12,000 pp sharing",
    voucher: "",
    duration: "3 days / 2 nights",
    tag: "Escape to the desert.",
    description: "Camp beneath the Namibian sky for 2 nights and explore Dune 45, Dead Vlei, Sossusvlei and Sesriem Canyon along the way.",
    details: ["Professional English-speaking guide", "Twin-share camping", "Meals and park entry fees", "Wednesday weekly departure"],
  },
  {
    title: "Etosha Budget Safari",
    image: designPhoto(43),
    category: "Work & Wander",
    price: "From N$12,000 pp sharing",
    voucher: "",
    duration: "3 days / 2 nights",
    tag: "See the wild up close.",
    description: "Spend three days chasing wildlife sightings, watching the waterholes and camping under Namibia's brightest stars.",
    details: ["Professional English-speaking guide", "Full-day Etosha open game viewer drive", "Twin-share camping", "Saturday weekly departure"],
  },
  {
    title: "Township Walking Tour",
    image: designPhoto(42),
    category: "Social & Sunset",
    price: "R950 pp",
    voucher: `Beer and burger at ${onlyFools()}`,
    duration: "Morning or afternoon",
    tag: "Make friends in Langa.",
    description: "Explore Cape Town's oldest township with a local guide, stopping at the museum, community projects and family homes along the way.",
    details: ["Pickup and return transfer included", "Langa museum and family visits", "Community projects", "Sundays may include gospel/church visit"],
  },
  {
    title: "Township Cycle Tour",
    image: designPhoto(39),
    category: "Social & Sunset",
    price: "R1,150 pp",
    voucher: `Beer and burger at ${onlyFools()}`,
    duration: "Approximately 3 hours cycling",
    tag: "Cruise around Langa.",
    description: "Take a three-hour ride with a local guide, cycling between Langa's landmarks, community spaces and everyday meeting places.",
    details: ["Pickup and return transfer included", "Langa Museum and Cultural Centre", "Taxi rank and old hostels", "Traditional beer tasting"],
  },
];

tours.push({
  title: "Secret Hike",
  image: designPhoto(41),
  category: "Ocean & Adventure",
  price: "R1,150 pp",
  voucher: `Beer and burger at ${onlyFools()}`,
  duration: "Guided hike",
  tag: "We'll lead the way.",
  description: "Cape Town has some of the most beautiful hikes in the world. And we want to take you there. Pack your hiking shoes, and we'll sort the rest.",
  details: ["Guided Cape Town route", "Route and timing confirmed with your guide"],
});

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

const faqSections = [
  {
    title: "Booking & Payment",
    items: [
      ["How do I book my stay?", "Pick your room, private en-suite or a bed in our female-only dorm, and book straight through the site. Easy."],
      ["How do I pay?", stayPaymentPolicy],
      ["What if I need to cancel or change my dates?", "Cancellation terms depend on your room type, so check the details at checkout before you confirm. If plans change, reach out and we'll help sort it."],
      ["What do I need to bring?", "A valid photo ID and the card you booked with. That's it."],
    ],
  },
  {
    title: "Checking In & Out",
    items: [
      ["What time can I check in?", "From 3:00pm."],
      ["What time is checkout?", "Between 8 and 10am. Squeeze in one more coffee before you go."],
      ["Is there any storage for my luggage?", "Luggage storage is free of charge before check-in or on the day you check out. We unfortunately can't store luggage beyond checkout day, as luggage has previously been left for several days. Stored luggage is kept at your own risk."],
      ["Can under-18s stay?", "Unfortunately no under 18s."],
    ],
  },
  {
    title: "Rooms",
    items: [
      ["What's the difference between a private room and the female-only dorm?", "Private rooms give you your own en-suite space, a double bed, a desk for getting things done and a Smart TV for switching off. The female-only dorm is a comfortable, secure shared stay with a bunk bed, en-suite bathroom, wardrobe and balcony, good for meeting people while still having your own space to unpack."],
      ["What's included in my room?", "Every room comes with WiFi, a place to store your things and a proper spot to work if you need to. Private rooms add a TV and double bed; dorms add the bunk and balcony."],
      ["Is there parking?", "Yes, secure on-site parking is available for an extra R50 per day. It needs to be arranged before check-in and is available on a first come, first served basis."],
    ],
  },
  {
    title: "Food, Drink & Getting Together",
    items: [
      ["Is there somewhere to eat and drink on site?", `Always. ${onlyFools()}, our on-site restaurant serving burgers, and ${ponyUp("Pony Up Rooftop Bar")} serving pizzas are both there: good food, good drinks and good company without leaving home.`],
      ["Are pets or parties allowed?", `No pets and no parties in the rooms, sorry. The good news is ${ponyUp("Pony Up")} is right there when you're ready to celebrate.`],
      ["Is there WiFi fast enough to work from?", "Yes, that's kind of the point. Fast WiFi and proper desks make Fools Inn an easy base for remote work between adventures."],
    ],
  },
  {
    title: "Location & Exploring",
    items: [
      ["Where is Fools Inn based?", "Right in the heart of Sea Point, a five-minute walk from the best coffee, a short stroll to Saunder's Beach, and close enough to Lion's Head, the Sea Point Promenade, V&A Waterfront and Table Mountain to explore all of it from one home base."],
      ["Can I book tours and activities through Fools Inn?", "Yes, our on-site tour desk can sort you out with everything from surf lessons to shark cage diving to sunset hikes up Lion's Head. Check out our Tours page or ask at the desk once you're in."],
      ["How long can I stay?", "As long as you like. Come for a night, stay for the week, stay for the vibe."],
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
    pause: "M10 4H6v16h4zM18 4h-4v16h4z",
    play: "m6 3 14 9-14 9V3Z",
  };
  return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name] || paths.sparkle}"></path></svg>`;
}

const primaryNav = [["Home", "/"], ["Rooms", "/rooms"], ["Tours", "/tours"], ["Contact Us", "/contact"]];
const mobileViewport = window.matchMedia("(max-width: 700px)");
const roomDetails = {
  "/rooms/private": {
    title: "Private Rooms", heading: "Make yourself at home", theme: "yellow",
    hero: 36, photos: [33, 34, 32, 31], amenityPhoto: 35,
    copy: "Our private en-suite rooms are made for travellers who enjoy the energy of a backpackers and the freedom of having their own space.",
    more: "Stretch out on a double bed, catch up on work at your desk or switch off in front of the Smart TV. If you like to share memories, but not bathrooms, this room's for you.",
    amenities: ["Double bed", "Table & chair", "Wardrobe", "En-suite bathroom", "WiFi", "Smart TV"],
  },
  "/rooms/female-dorm": {
    title: "Female-Only Dorms", heading: "Stay in good company", theme: "pink",
    hero: 29, photos: [21, 26, 25, 24], amenityPhoto: 27,
    copy: "Our female-only dorms make shared accommodation feel a little more comfortable. Settle into your own bunk, unpack properly and make use of the en-suite bathroom, kitchen area and balcony.",
    more: "It's an easy place to meet other women travelling through Cape Town, swap recommendations and make plans together. And when you feel like doing your own thing, you can do that too.",
    amenities: ["Bunk bed", "Table & chair", "Wardrobe", "WiFi", "Balcony", "En-suite bathroom", "Kitchen area"],
  },
};

function designPhoto(number) {
  return "design/photo-" + String(number).padStart(2, "0") + ".jpg";
}

function photo(file, alt, className = "", eager = false) {
  return `<img class="${className}" src="${asset(file)}" alt="${alt}" loading="${eager ? "eager" : "lazy"}" decoding="async" ${eager ? 'fetchpriority="high"' : ""}>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

let disposeTestimonials = () => {};

function layout(content) {
  disposeTestimonials();
  const current = currentPath();
  const hasHero = ["/", "/rooms", "/tours", "/contact", "/terms", ...Object.keys(roomDetails)].includes(current);
  root.innerHTML = `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <aside class="announcement">
      <span>Want to go on an adventure? We've got curated tours you'll tell your grandkids about.</span>
      <a href="/tours" data-link>Book a tour now ${icon("arrow")}</a>
    </aside>
    <header class="site-header ${hasHero ? "over-hero" : ""}">
      <a class="brand wordmark" href="/" data-link aria-label="Fools Inn home">FOOLS INN</a>
      <nav class="nav" id="main-nav" aria-label="Main navigation">
        ${primaryNav.map(([label, href]) => `<a class="${current === href || (href === "/rooms" && current.startsWith("/rooms/")) ? "active" : ""} ${href === "/contact" ? "contact-link" : ""}" href="${href}" data-link ${current === href ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
        <div class="mobile-extra">${navItems.filter(([, href]) => !primaryNav.some(([, main]) => href === main) && href !== "/book-now").map(([label, href]) => `<a href="${href}" data-link>${label}</a>`).join("")}</div>
      </nav>
      <a class="book-link button" href="/book-now" data-link>Book Now</a>
      <button class="menu-button" type="button" aria-label="Open navigation" aria-controls="main-nav" aria-expanded="false">${icon("menu")}</button>
    </header>
    <main id="main-content" tabindex="-1">${content}</main>
    ${footer()}
  `;
  bindLinks();
  bindForms();
  syncTourLayout();
  disposeTestimonials = bindTestimonialsCarousel();
}

function navigate(href) {
  if (location.protocol === "file:") {
    location.hash = href;
  } else {
    history.pushState({}, "", href);
    render();
  }
  window.scrollTo({ top: 0, behavior: "instant" });
}

function bindLinks() {
  // Keep in-page anchors separate from the hash routes used by offline previews.
  document.querySelectorAll('a[href^="#"]:not([data-link])').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.getElementById(link.getAttribute("href").slice(1));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      if (target.id === "main-content") target.focus({ preventScroll: true });
    });
  });
  document.querySelectorAll("[data-link]").forEach((link) => {
    if (location.protocol === "file:") link.href = "#" + link.getAttribute("href");
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      navigate(link.getAttribute("href").replace(/^#/, ""));
    });
  });
  const button = document.querySelector(".menu-button");
  const nav = document.querySelector(".nav");
  const closeMenu = () => {
    nav.classList.remove("nav-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open navigation");
    button.innerHTML = icon("menu");
  };
  button.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open");
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    button.innerHTML = icon(open ? "x" : "menu");
  });
  nav.addEventListener("keydown", (event) => {
    if (event.key === "Escape") { closeMenu(); button.focus(); }
  });
  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const track = document.getElementById(button.dataset.scroll);
      if (track.id === "review-track") {
        track.dispatchEvent(new CustomEvent("carouselstep", { detail: Number(button.dataset.direction) }));
        return;
      }
      track.scrollBy({ left: Number(button.dataset.direction) * track.clientWidth * 0.85, behavior: "smooth" });
    });
  });
  document.querySelectorAll("[data-reload-map]").forEach((button) => {
    button.addEventListener("click", () => {
      const frame = document.getElementById("contact-map");
      frame.src = mapEmbedUrl();
    });
  });
}

function hero(title, file, options = {}) {
  return `<section class="hero ${options.home ? "home-hero" : ""} ${options.intro ? "tour-hero" : ""}" data-page="${escapeHtml(currentPath())}">
    ${photo(file, options.alt || title, "hero-image", true)}
    <div class="hero-inner">
      <h1><span>${title}</span></h1>
      ${options.intro ? `<div class="hero-description"><p>${options.intro}</p>${options.home ? bookingSearch() : `<div class="actions"><a class="button" href="/book-now" data-link>Book Now ${icon("arrow")}</a><a class="button button-light" href="#adventures">Explore More</a></div>`}</div>` : ""}
    </div>
  </section>`;
}

function bookingSearch() {
  return `<form class="booking-search" aria-label="Plan your stay">
    <label>${icon("calendar")}<span>Check-in</span><input type="date" name="checkin" aria-label="Check-in date" required></label>
    <label><span>Check-out</span><input type="date" name="checkout" aria-label="Check-out date" required></label>
    <label><span>Guests</span><select name="guests" aria-label="Number of guests">${[1,2,3,4,5,6].map((n) => `<option value="${n}">${n} ${n === 1 ? "guest" : "guests"}</option>`).join("")}</select></label>
    <label class="code-field"><span>Promo code</span><input name="code" maxlength="40" placeholder="Add code" aria-label="Promo code"></label>
    <button class="button" type="submit">Enquire ${icon("arrow")}</button>
  </form>`;
}

function homePage() {
  return `
    ${hero("Stay where the people are.", "design/home-exterior.jpg", {
      home: true, alt: "Only Fools restaurant below Fools Inn in Sea Point",
      intro: `Perched above one of Cape Town's favourite local bars, Fools Inn is a boutique backpackers and your home base for working, exploring and meeting people. Come for a night; stay for the week.`
    })}
    <section class="home-intro section-pad" aria-label="Your Sea Point home base">
      <p>Fools Inn is like a backpackers, but better. Check into a private en-suite room or a female-only dorm. Get some work done. Go for a walk on the Sea Point Promenade or a dip at Saunders' Beach. And end your day with new friends at ${onlyFools()} or the ${ponyUp("Pony Up Rooftop Bar")}. Experience it all from your home base in the heart of Sea Point.</p>
      <div class="home-photo-story">
        <figure class="home-photo-wide">${photo(designPhoto(13), "A red umbrella beside the Sea Point tidal pool")}</figure>
        <div class="home-photo-pair">
          <figure>${photo(designPhoto(20), "A private room with a double bed and fresh flowers")}</figure>
          <figure>${photo(designPhoto(16), "A sunny desk and chair in a Fools Inn room")}<figcaption>This is the place. Wait till you meet the people.</figcaption></figure>
        </div>
      </div>
    </section>
    ${featuredTours()}
    ${adventureSection()}
    ${testimonials()}
    ${faqSection()}
  `;
}

function photoStrip(numbers, labels) {
  return `<div class="photo-strip" aria-label="Life at Fools Inn">${numbers.map((n, i) => photo(designPhoto(n), labels[i])).join("")}</div>`;
}

function featuredTours() {
  const featured = ["Kayak", "Surf", "Shark Cage Diving"].map((title) => tours.find((tour) => tour.title === title));
  return `<section class="featured-tours section-pad">
    <div class="featured-heading"><h2>Make your stay more epic.<br>Book a curated tour.</h2><a class="button button-outline" href="/tours" data-link>Book Now ${icon("arrow")}</a></div>
    <div class="tour-grid featured-tour-grid">${featured.map((tour) => tourCard(tour, 0, true)).join("")}</div>
  </section>`;
}

function scrollControls(id) {
  return `<div class="scroll-controls"><button type="button" data-scroll="${id}" data-direction="-1" aria-label="Scroll back" title="Scroll back">${icon("chevron")}</button><button type="button" data-scroll="${id}" data-direction="1" aria-label="Scroll forward" title="Scroll forward">${icon("chevron")}</button></div>`;
}

function bindTestimonialsCarousel() {
  const section = document.querySelector(".testimonials");
  if (!section) return () => {};

  const track = section.querySelector(".review-track");
  const originals = Array.from(track.children);
  if (originals.length < 2) return () => {};
  const copies = originals.map((review) => {
    const copy = review.cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    copy.setAttribute("tabindex", "-1");
    track.appendChild(copy);
    return copy;
  });
  const cleanups = [];
  const listen = (target, type, handler) => {
    target.addEventListener(type, handler);
    cleanups.push(() => target.removeEventListener(type, handler));
  };
  const speed = 30; // Pixels per second, independent of the display refresh rate.
  let hovered = window.matchMedia("(hover: hover)").matches &&
    [...originals, ...copies].some((review) => review.matches(":hover"));
  let position = track.scrollLeft;
  let appliedScroll = position;
  let lastTime;
  let frame;
  let selectedReview = null;

  const selectReview = (index) => {
    selectedReview = selectedReview === index ? null : index;
    // Keep the repeated copy in sync when the carousel crosses its loop boundary.
    [...originals, ...copies].forEach((review, position) => {
      const selected = position % originals.length === selectedReview;
      review.classList.toggle("review-selected", selected);
      review.setAttribute("aria-pressed", String(selected));
    });
  };

  for (const [index, review] of [...originals, ...copies].entries()) {
    listen(review, "click", () => selectReview(index % originals.length));
    listen(review, "keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      if (!event.repeat) selectReview(index % originals.length);
    });
    listen(review, "pointerenter", (event) => {
      if (event.pointerType !== "touch") hovered = true;
    });
    listen(review, "pointerleave", (event) => {
      if (event.pointerType !== "touch") hovered = false;
    });
  }

  const loopWidth = () => copies[0].offsetLeft - originals[0].offsetLeft;
  const moveTo = (value) => {
    const width = loopWidth();
    if (width <= 0) return;
    position = ((value % width) + width) % width;
    track.scrollTo({ left: position, behavior: "instant" });
    appliedScroll = track.scrollLeft;
  };

  listen(track, "carouselstep", (event) => {
    const step = originals[1].offsetLeft - originals[0].offsetLeft;
    moveTo(position + event.detail * step);
  });

  const animate = (time) => {
    // Retain fractional pixels; reading scrollLeft each frame can round slow motion away.
    const elapsed = lastTime === undefined ? 0 : Math.min(time - lastTime, 64);
    lastTime = time;
    if (Math.abs(track.scrollLeft - appliedScroll) > 1) position = track.scrollLeft;
    if (!hovered) moveTo(position + speed * elapsed / 1000);
    frame = window.requestAnimationFrame(animate);
  };
  frame = window.requestAnimationFrame(animate);

  return () => {
    window.cancelAnimationFrame(frame);
    cleanups.forEach((cleanup) => cleanup());
    copies.forEach((copy) => copy.remove());
  };
}

function adventureSection() {
  const items = [
    ["Work", 6, "Laptop time between adventures", "Digital nomads, this one's for you. We're making remote working make sense. Fast WiFi, proper desks, and a five-minute walk to Sea Point's freshest coffee."],
    ["Explore", 5, "Lion's Head above Sea Point", "Take a mid-day surf break, hike up Lion's Head for sunset, or stroll along Sea Point Promenade whenever you want."],
    ["Play", 1, "Coffee and good company in Sea Point", `Raise a glass to new friends at ${onlyFools()} or take the party upstairs to ${ponyUp("Pony Up Rooftop Bar")}. Good drinks, good music and even better company are just outside your door.`],
    ["Sleep", 10, "A private room at Fools Inn", "Choose a private en-suite room or a bed in our female-only dorms. Both give you a comfortable place to rest before doing it all again tomorrow."]
  ];
  return `<section class="adventure-section section-pad theme-yellow">
    <div class="section-heading"><h2>Choose your own adventure.</h2><p>Work a little, explore a lot, and meet some people along the way. The best coffee, the best food, the best beaches, and the best trails in Cape Town are on your doorstep. Where you go next is up to you.</p></div>
    ${scrollControls("adventure-track")}
    <div class="adventure-grid" id="adventure-track">${items.map(([title, image, alt, copy]) => `<article>${photo(designPhoto(image), alt)}<h3>${title}</h3><p>${copy}</p></article>`).join("")}</div>
  </section>`;
}

function testimonials() {
  const reviews = [
    ["Great location for a good price. Clean and well kept.", "Van", "Switzerland"],
    ["Central location and friendly staff. Good for a quick short stay and within distance to all restaurants and bars! They do have a nice secure place for luggage storage.", "Nemi", "the UK"],
    ["The room is clean and has everything you need for a short stay. The location is fantastic and the staff were lovely.", "Rachel", "the USA"],
    ["The location and the staff were very helpful and understanding.", "Maryke", "Brazil"],
  ];
  return `<section class="testimonials section-pad theme-blue" aria-label="Guest testimonials" aria-roledescription="carousel">
    <div class="section-heading"><h2>Testimonials</h2><div><h2>The word on the street.</h2><p>Since 2022, thousands of happy guests have called Fools Inn home. Some have made friends, some have become friends and some keep coming back. We're dying to know how your experience was.</p><a class="button review-link" href="${escapeHtml(googleReviewUrl)}" target="_blank" rel="noopener">Leave a Review ${icon("arrow")}</a></div></div>
    ${scrollControls("review-track")}
    <div class="review-track" id="review-track" tabindex="0" aria-label="Guest reviews">${reviews.map(([copy, name, country]) => `<figure class="review" role="button" tabindex="0" aria-pressed="false"><span class="quote-mark" aria-hidden="true">&ldquo;</span><blockquote>${copy}</blockquote><figcaption><strong>${name}</strong><span>from ${country}</span></figcaption></figure>`).join("")}</div>
  </section>`;
}

function roomsPage() {
  return `${hero("Meet you back at ours", designPhoto(23), {alt: "A sunny seaside afternoon"})}
    <section class="section-pad room-listing">
      <div class="section-heading"><h2>We've got room(s) for you.</h2><div><p>Choose a private en-suite room for a space of your own, or check into a female-only dorm for a more social stay. Whichever you choose, you'll find thoughtful comforts inside and the Fools Inn atmosphere just outside your door.</p><div class="actions"><a class="button" href="/book-now" data-link>Book Now ${icon("arrow")}</a><a class="button button-outline" href="#our-rooms">Explore More</a></div></div></div>
      <div class="room-grid" id="our-rooms">
        ${roomCard("Private Rooms", "Your own space. Your own pace.", "A comfortable private room with an en-suite bathroom, comfortable double bed and dedicated workspace for switching off or logging on.", 20, "/rooms/private")}
        ${roomCard("Female-Only Dorms", "Good company included.", "A comfortable and secure shared stay for female travellers, with an en-suite bathroom and space to unpack.", 21, "/rooms/female-dorm")}
      </div>
    </section>
    ${lifestyleSection(false)}`;
}

function roomCard(title, tag, description, image, href) {
  return `<article class="room-card">${photo(designPhoto(image), title + " at Fools Inn")}
    <div class="room-card-body"><h3>${title}</h3><p class="room-tag">${tag}</p><p>${description}</p><a class="text-link" href="${href}" data-link>View ${title} ${icon("arrow")}</a></div></article>`;
}

function roomPage(room) {
  return `${hero(room.heading, designPhoto(room.hero), {alt: room.heading})}
    <section class="room-description theme-${room.theme}">
      <div class="section-heading section-pad"><h2>${room.title}</h2><div><p>${room.copy}</p><p>${room.more}</p><a class="text-link" href="/book-now?room=${encodeURIComponent(room.title)}" data-link>Book your stay ${icon("arrow")}</a></div></div>
      ${photoStrip(room.photos, room.photos.map((_, i) => room.title + " interior, view " + (i + 1)))}
    </section>
    <section class="amenities section-pad ${room.theme === "pink" ? "theme-red" : "theme-blue"}">
      <div class="amenities-photos">${photo(designPhoto(room.amenityPhoto), room.theme === "pink" ? "Colourful beachwear on pink shower tiles" : "Ready for a beach day")}${photo(designPhoto(room.photos[0]), room.title + " at Fools Inn", "amenities-secondary")}</div>
      <div><h2>Amenities</h2><ol>${room.amenities.map((item, i) => `<li><span>[ ${String(i + 1).padStart(2, "0")} ]</span>${item}</li>`).join("")}</ol></div>
    </section>`;
}

function lifestyleSection(tour = false) {
  return `<section class="lifestyle section-pad ${tour ? "theme-navy" : "theme-yellow"}">
    <p class="lifestyle-intro">${tour ? "Salt in your hair. Cape Town at your feet. A shark gliding past the cage or wildlife wandering into view at an Etosha waterhole. These are the days that get you up early, turn strangers into friends, and leave you with a camera roll filled with experiences to take back home." : "You'll know you've settled in when the faces downstairs become familiar, yesterday's stranger is today's adventure buddy, and the local barista knows your order. Fools Inn gives you the space to make yourself comfortable, and enough happening around you to make every day different. Stay for a good time or a long time, or both."}</p>
    <figure class="lifestyle-wide">${photo(designPhoto(tour ? 38 : 19), tour ? "A Cape Town beach with yellow umbrellas" : "Friends on the beach with a portable radio")}<figcaption>${tour ? "Swim, surf and kayak in our backyard." : "Book your room at Fools Inn and this could be you on a random Tuesday."}</figcaption></figure>
    <div class="lifestyle-pair">
      <figure>${photo(designPhoto(tour ? 37 : 18), tour ? "Enjoying a drink in the sunshine" : "Friends sharing a drink at Pony Up")}<figcaption>${tour ? "Your camera roll will thank you." : `${ponyUp("Pony Up Rooftop Bar")} has the bevs, the food and the company you've been looking for.`}</figcaption></figure>
      <figure>${photo(designPhoto(tour ? 40 : 22), tour ? "A group ready for their next adventure" : "Fools Inn cap on a sunny day")}<figcaption>${tour ? "It's hard to choose just one experience, but you don't have to. Line 'em up!" : "You'll get the hype once you're here."}</figcaption></figure>
    </div>
  </section>`;
}

function toursPage() {
  return `${hero("Get out there", designPhoto(51), {alt: "A surfboard loaded onto a car for an adventure", intro: "We've curated small-group tours in Cape Town and beyond. No big buses and no flags to follow. Just proper adventures, expert guides and the best memories."})}
    <section class="tours-section section-pad theme-yellow" id="adventures">
      <h2>Click for adventure.</h2>
      <div class="tour-grid">${tours.slice(0, 6).map((tour, i) => tourCard(tour, i)).join("")}</div>
      <div class="tour-break"><a class="button button-light" href="#more-adventures">Explore More ${icon("arrow")}</a></div>
      <div class="tour-grid" id="more-adventures">${tours.slice(6).map((tour, i) => tourCard(tour, i + 6)).join("")}</div>
    </section>
    ${lifestyleSection(true)}`;
}

function tourCard(tour, index, featured = false) {
  const card = `<article class="tour-card ${featured ? "featured-tour" : ""}">
      <div class="tour-image">${photo(tour.image, tour.title)}<span class="tour-price">${tour.price}</span></div>
      <div class="tour-card-body"><h3>${tour.title}</h3><p class="tour-tagline">${tour.tag}</p><p>${tour.description}</p>
        <div class="tour-card-actions">
          ${tour.voucher ? `<p class="tour-offer">${tour.voucher}</p>` : ""}
          ${featured ? "" : `<details class="tour-inclusions"><summary>Tour details ${icon("chevron")}</summary><p>${tour.duration}</p><ul>${tour.details.map((item) => `<li>${item}</li>`).join("")}</ul></details>`}
        <a class="button button-outline" href="${activitarUrl}" target="_blank" rel="noopener">Book Now ${icon("arrow")}</a>
        </div>
      </div>
    </article>`;
  return featured ? card : `<details class="tour-item" ${index === 0 ? "open" : ""}>
    <summary>${tour.title}<span aria-hidden="true">+</span></summary>${card}
  </details>`;
}

function syncTourLayout() {
  document.querySelectorAll(".tour-item").forEach((item, index) => {
    item.open = !mobileViewport.matches || index === 0;
  });
}

function faqSection(standalone = false) {
  const headings = ["Booking & Payment", "Checking In & Out", "Rooms & Amenities", "Food, Drinks & Remote Work", "Location & Things to Do in Sea Point"];
  return `<section class="faqs section-pad theme-pink ${standalone ? "standalone" : ""}">
    <div class="section-heading">${standalone ? "<h1>FAQs</h1>" : "<h2>FAQs</h2>"}<p>Got questions? We've got answers. If you don't see what you're looking for, just <a class="inline-link" href="/contact" data-link>drop us a message</a>; we're around.</p></div>
    <div class="faq-groups">${faqSections.map((group, i) => `<details class="faq-category"><summary>${headings[i]}<span aria-hidden="true">+</span></summary><div class="faq-questions">${group.items.map(([question, answer]) => `<details><summary>${question}<span aria-hidden="true">+</span></summary><p>${answer}</p></details>`).join("")}</div></details>`).join("")}</div>
  </section>`;
}

function termsPage() {
  const sections = [
    ["No smoking / vaping", ["Smoking and vaping are strictly prohibited anywhere on the entire premises, including rooms, balconies, common areas and outdoor spaces.", "A fine may be applicable for any breach of this rule."]],
    ["No children", ["No children of any age are allowed on the premises, including in guest rooms, common areas and outdoor spaces."]],
    ["No visitors", ["Visitors are not allowed in guest rooms. Only registered guests are permitted on the premises."]],
    ["No pets", ["No pets or animals of any kind are allowed on the premises."]],
    ["Quiet hours", ["Quiet hours are from 10:00 p.m. to 7:00 a.m. Please be considerate of other guests and keep noise to a minimum during this time."]],
    ["COVID-19 / Communicable illness", ["We prioritise the health and safety of all our guests and staff. If you are feeling unwell, have symptoms of a contagious illness or have been in close contact with someone who is ill, please inform us immediately.", "We reserve the right to refuse entry or ask a guest to leave if there is a risk to the health and safety of others."]],
    ["Severe weather & unsafe travel", ["In the event of severe weather conditions (e.g. storms, floods, heavy snow, etc.) or other unsafe travel conditions, we may need to cancel or reschedule your booking. In such cases, we will notify you as soon as possible and provide options for a refund or to reschedule."]],
    ["Cancellations", ["Standard cancellation policies apply as per your booking channel or directly with us.", "In the event of severe weather, unsafe travel conditions or other extraordinary circumstances beyond our control, we may allow a flexible cancellation or rescheduling option."]],
    ["Check-in & check-out", ["Check-in: from 3:00 p.m. Check-out: by 10:00 a.m.", "Late check-out may be available upon request and is subject to availability and additional fees."]],
    ["Payment", [stayPaymentPolicy]],
    ["Damage & liability", ["Guests are responsible for any damage caused to the property, rooms or furnishings during their stay.", "A charge may be applied to the credit card on file or invoiced directly."]],
    ["Security & CCTV", ["For your safety, the premises are monitored by CCTV. We also have a secure entry system and take all reasonable measures to ensure a safe environment for our guests and staff."]],
    ["Guest conduct", ["We expect all guests to respect our staff, property and other guests. Any behaviour deemed disruptive, illegal or against our house rules may result in you being asked to leave, with no refund."]],
  ];
  return `${hero("Terms & Conditions", "design/terms-stars.jpg", {alt: "Three star-shaped shadows in the sunshine"})}
    <section class="terms-content section-pad">
      <div class="section-heading"><h2>Thank you for choosing<br>Fools Inn</h2><p>To ensure a safe, comfortable and enjoyable stay for all our guests, please take note of the following terms and conditions:</p></div>
      <div class="terms-sections">${sections.map(([heading, paragraphs]) => `<section><h3>${heading}</h3>${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</section>`).join("")}</div>
      <h2 class="terms-closing">We look forward to hosting<br>you at Fools Inn!</h2>
    </section>`;
}

function contactPage() {
  return `${hero("Don't be a stranger", designPhoto(56), {alt: "Friends looking out across the beach"})}
    <section class="contact-section section-pad">
      <div><h2>Let's chat.</h2><p>Need a room, an adventure or a little local advice? Pop us a message.</p></div>
      <div>${contactForm()}${contactCards()}</div>
    </section>
    <section class="map-section section-pad theme-red">
      <div class="map-panel">
        <iframe id="contact-map" title="Fools Inn at 82 Regent Road, Sea Point" src="${escapeHtml(mapEmbedUrl())}" loading="eager" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div class="map-tools"><a class="text-link" href="${mapsUrl()}" target="_blank" rel="noopener">Open in Google Maps ${icon("arrow")}</a><button type="button" class="map-reload" data-reload-map>Reload map</button></div>
      </div>
      <div class="map-copy"><p>Find us in the heart of Sea Point, right in the middle of the hustle and bustle. The promenade, beaches, coffee shops, restaurants and bars are all just a short walk away.</p><a class="text-link" href="${escapeHtml(directionsUrl())}" target="_blank" rel="noopener">Get directions ${icon("arrow")}</a></div>
    </section>`;
}

function contactForm() {
  return `<form class="contact-form">
    <div class="form-grid">
      <label>Name<input name="name" autocomplete="given-name" required maxlength="100"></label>
      <label>Surname<input name="surname" autocomplete="family-name" maxlength="100"></label>
      <label>Phone number<input name="phone" type="tel" autocomplete="tel" maxlength="40"></label>
      <label>Email<input name="email" type="email" autocomplete="email" required maxlength="254"></label>
    </div>
    <label>Your message<textarea name="message" rows="4" required maxlength="5000"></textarea></label>
    <button class="button" type="submit">Send my message ${icon("arrow")}</button>
    <p class="form-status" role="status"></p>
  </form>`;
}

function contactCards() {
  return `<div class="contact-details">
    <a href="${contactDetails.phoneHref}">${icon("phone")}<span><strong>Phone number</strong>${contactDetails.phone}</span></a>
    <a href="${contactDetails.emailHref}">${icon("mail")}<span><strong>Email address</strong>${contactDetails.email}</span></a>
    <a href="${mapsUrl()}" target="_blank" rel="noopener">${icon("map")}<span><strong>Our location</strong>${contactDetails.address}</span></a>
  </div>`;
}

function mapsUrl() {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(contactDetails.address + ", Cape Town");
}

function mapEmbedUrl() {
  // Use the embed destination directly, without the legacy maps.google.com redirect.
  const url = new URL("https://www.google.com/maps/embed");
  url.search = new URLSearchParams({ origin: "mfe", pb: "!1m3!2m1!1s" + contactDetails.address + ", Cape Town!6i15" }).toString();
  return url.href;
}

function directionsUrl() {
  const url = new URL("https://www.google.com/maps/dir/");
  url.search = new URLSearchParams({ api: "1", destination: contactDetails.address + ", Cape Town, South Africa" }).toString();
  return url.href;
}

function bookingPage() {
  const params = currentParams();
  return `<section class="section-pad booking-page">
    <h1>Let's make it official.</h1>
    <div class="section-heading"><h2>Come stay with us.</h2><div><p>Fools Inn is a boutique backpackers offering private en-suite rooms and female-only dorms in the heart of Sea Point. Come for the fast WiFi, the ${ponyUp("Pony Up Rooftop Bar")}, and the unbeatable Cape Town location; stay for the curated adventures, new friends, and camera roll full of memories.</p><p>Your room's waiting. Your people are already at the bar.</p><p>Send us your dates and we'll confirm room availability and payment details with you.</p></div></div>
    <form class="stay-enquiry">
      <div class="form-grid">
        <label>Room<select name="room">${["Private Rooms", "Female-Only Dorms"].map((room) => `<option ${params.get("room") === room ? "selected" : ""}>${room}</option>`).join("")}</select></label>
        <label>Guests<select name="guests">${[1,2,3,4,5,6].map((n) => `<option value="${n}" ${params.get("guests") === String(n) ? "selected" : ""}>${n}</option>`).join("")}</select></label>
        <label>Check-in<input type="date" name="checkin" value="${escapeHtml(params.get("checkin") || "")}" required></label>
        <label>Check-out<input type="date" name="checkout" value="${escapeHtml(params.get("checkout") || "")}" required></label>
        <label>Name<input name="name" autocomplete="name" required maxlength="100"></label>
        <label>Email<input name="email" type="email" autocomplete="email" required maxlength="254"></label>
        <label>Promo code<input name="code" value="${escapeHtml(params.get("code") || "")}" maxlength="40"></label>
      </div>
      <button class="button" type="submit">Enquire about my stay ${icon("arrow")}</button>
      <p class="form-status" role="status"></p>
    </form>
    <div class="booking-tours theme-blue"><div><h2>Coming with plans?</h2><p>Find your next adventure and continue to Activitar for tour bookings.</p></div><a class="button" href="${activitarUrl}" target="_blank" rel="noopener">Visit Activitar ${icon("arrow")}</a></div>
  </section>`;
}

function localDate(date = new Date()) {
  return date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0");
}

function bindForms() {
  document.querySelectorAll(".booking-search, .stay-enquiry").forEach((form) => {
    const arrival = form.elements.checkin;
    const departure = form.elements.checkout;
    arrival.min = localDate();
    const updateDates = () => {
      const earliest = new Date((arrival.value || localDate()) + "T12:00:00");
      earliest.setDate(earliest.getDate() + 1);
      departure.min = localDate(earliest);
      departure.setCustomValidity(departure.value && departure.value < departure.min ? "Check-out must be after check-in." : "");
    };
    arrival.addEventListener("change", updateDates);
    departure.addEventListener("change", updateDates);
    updateDates();
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      updateDates();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      if (form.matches(".booking-search")) {
        navigate("/book-now?" + new URLSearchParams(data).toString());
      } else {
        const body = `Hi Fools Inn,\n\nI'd like to enquire about a stay.\nRoom: ${data.get("room")}\nGuests: ${data.get("guests")}\nCheck-in: ${data.get("checkin")}\nCheck-out: ${data.get("checkout")}\nPromo code: ${data.get("code") || "None"}\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}`;
        openEmail(form, "Fools Inn stay enquiry", body);
      }
    });
  });
  document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const body = `${data.get("message")}\n\nFrom: ${data.get("name")} ${data.get("surname")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}`;
    openEmail(form, "Fools Inn website enquiry", body);
  });
}

function openEmail(form, subject, body) {
  location.href = contactDetails.emailHref + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  form.querySelector(".form-status").textContent = "Your email app will open with your enquiry. Send it there to reach us. You can also email " + contactDetails.email + ".";
}

function galleryPage() {
  return pageShell("Gallery", "A little look around.", "Rooms, familiar faces and the Sea Point life.",
    `<div class="live-gallery-grid">${liveGalleryImages.map((file, i) => `<figure>${photo("gallery/" + file, "Fools Inn gallery photograph " + (i + 1))}</figure>`).join("")}</div>`);
}

function blogPage() {
  return pageShell("Blog", "Field notes from Sea Point.", "A few stories from your Cape Town home base.",
    `<div class="blog-list">${blogPosts.map((post) => `<article class="blog-article">${photo(post.image, post.title)}<div><p class="eyebrow">${post.category} / ${post.date}</p><h2>${post.title}</h2>${post.body.map((copy) => `<p>${copy}</p>`).join("")}</div></article>`).join("")}</div>`);
}

function neighbourhoodPage() {
  return pageShell("The neighbourhood", "Work by day, wander by dusk.", "Promenade mornings, coffee stops and the Atlantic on your doorstep.",
    `${photo(designPhoto(15), "Cape Town coastline and mountains", "neighbourhood-image")}
    <div class="neighbourhood-grid">
      <article><h2>Coffee, then everything else.</h2><p>Nearby cafes make the remote-working rhythm easy: work, refill, walk, repeat.</p></article>
      <article><h2>Meet you at the ocean.</h2><p>Walk the Sea Point Promenade, take a dip at Saunders' Beach, or head out on a guided kayak trip.</p><a class="text-link" href="/tours" data-link>Explore tours ${icon("arrow")}</a></article>
      <article><h2>Good company downstairs.</h2><p>${onlyFools()} and ${ponyUp("Pony Up Rooftop Bar")} keep the food, drinks and conversation close to home.</p></article>
    </div>`);
}

function pageShell(eyebrow, title, intro, children) {
  return `<section class="section-pad page-shell"><div class="page-heading"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${intro}</p></div>${children}</section>`;
}

function footer() {
  const warm = currentPath() === "/rooms";
  return `<footer class="footer section-pad ${warm ? "theme-red" : "theme-yellow"}">
    <div class="footer-top"><a class="wordmark footer-brand" href="/" data-link aria-label="Fools Inn home">FOOLS INN</a>
      <nav class="footer-links" aria-label="Explore Fools Inn">${navItems.filter(([, href]) => href !== "/book-now").map(([label, href]) => `<a href="${href}" data-link>${label}</a>`).join("")}</nav>
      <div class="footer-contact"><a href="${mapsUrl()}" target="_blank" rel="noopener">${contactDetails.address}</a><a href="${contactDetails.emailHref}">${contactDetails.email}</a><a href="${contactDetails.phoneHref}">${contactDetails.phone}</a></div>
    </div>
    <div class="footer-bottom"><small>Copyright &copy; ${new Date().getFullYear()} Fools Inn. All rights reserved.</small><div>${socialLinks.map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener" aria-label="${label}" title="${label}">${icon("social")}</a>`).join("")}</div></div>
  </footer>`;
}

function currentRoute() {
  return location.protocol === "file:" ? location.hash.replace(/^#/, "") || "/" : location.pathname + location.search;
}

function currentPath() {
  return currentRoute().split("?")[0].replace(/\/$/, "") || "/";
}

function currentParams() {
  return new URLSearchParams(currentRoute().split("?")[1] || "");
}

function render() {
  const path = currentPath();
  const pages = {
    "/": homePage, "/rooms": roomsPage, "/tours": toursPage,
    "/neighbourhood": neighbourhoodPage, "/gallery": galleryPage,
    "/contact": contactPage, "/blog": blogPage, "/faqs": () => faqSection(true), "/terms": termsPage,
    "/book-now": bookingPage,
  };
  document.title = "Fools Inn | " + (roomDetails[path]?.title || ({"/": "Boutique Backpackers in Sea Point", "/rooms": "Rooms", "/tours": "Cape Town Tours", "/contact": "Contact", "/faqs": "FAQs", "/gallery": "Gallery", "/blog": "Blog", "/book-now": "Plan Your Stay", "/neighbourhood": "Sea Point", "/terms": "Terms & Conditions"}[path] || "Sea Point"));
  layout(roomDetails[path] ? roomPage(roomDetails[path]) : (pages[path] || homePage)());
}

mobileViewport.addEventListener("change", syncTourLayout);
window.addEventListener("popstate", render);
window.addEventListener("hashchange", render);
render();
