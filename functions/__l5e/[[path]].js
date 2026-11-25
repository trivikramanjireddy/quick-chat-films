// Serves Lovable-hosted images (/__l5e/...) on Cloudflare Pages
const LOVABLE_ORIGIN = "https://cinequick-in.lovable.app";

export async function onRequest({ request }) {
  const url = new URL(request.url);
  const res = await fetch(LOVABLE_ORIGIN + url.pathname + url.search, {
    headers: { Accept: request.headers.get("Accept") || "*/*" },
  });
  const headers = new Headers(res.headers);
  if (res.ok) headers.set("Cache-Control", "public, max-age=31536000, immutable");
  return new Response(res.body, { status: res.status, headers });
}
