const site = "https://foolsinn.co.za/";
const html = await (await fetch(site)).text();

const cssHrefs = [...html.matchAll(/href=["']([^"']+\.css[^"']*)["']/gi)]
  .map((match) => match[1].replaceAll("&amp;", "&"))
  .filter((href) => href.includes("foolsinn.co.za"));

const imageUrls = new Set(
  [...html.matchAll(/https?:\/\/[^"' <>)]+?\.(?:jpg|jpeg|png|webp)(?:\?[^"' <>)]+)?/gi)]
    .map((match) => match[0].replaceAll("&amp;", "&"))
);

for (const href of cssHrefs) {
  try {
    const css = await (await fetch(href)).text();
    for (const match of css.matchAll(/url\(([^)]+)\)/gi)) {
      const raw = match[1].trim().replace(/^["']|["']$/g, "").replaceAll("&amp;", "&");
      if (/\.(jpg|jpeg|png|webp)(\?|$)/i.test(raw)) {
        imageUrls.add(new URL(raw, href).href);
      }
    }
  } catch (error) {
    console.error(`Skipped ${href}: ${error.message}`);
  }
}

console.log([...imageUrls].sort().join("\n"));
