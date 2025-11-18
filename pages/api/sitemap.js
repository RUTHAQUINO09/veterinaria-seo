export default function handler(req, res) {
  const baseUrl = "https://veterinaria-seo.vercel.app";

  const pages = ["", "servicios", "contacto"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    const url = page === "" ? baseUrl : `${baseUrl}/${page}`;
    return `<url><loc>${url}</loc><lastmod>${new Date()
      .toISOString()
      .split("T")[0]}</lastmod></url>`;
  })
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
}
