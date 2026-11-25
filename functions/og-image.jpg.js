// Serves the WhatsApp/Facebook link-preview image at /og-image.jpg
// (image stored in Google Drive; cached at Cloudflare's edge)
const DRIVE_ID = "18cmbpz8z94yAtD5SNe7HOL87B-IUs9X0";

export async function onRequest({ request, waitUntil }) {
  const cache = caches.default;
  const key = new Request(new URL(request.url).origin + "/og-image.jpg?id=" + DRIVE_ID);
  const hit = await cache.match(key);
  if (hit) return hit;

  const res = await fetch("https://drive.usercontent.google.com/download?export=download&id=" + DRIVE_ID, {
    redirect: "follow",
  });
  if (!res.ok) return new Response("Image not available", { status: 502 });

  const out = new Response(res.body, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=86400",
    },
  });
  waitUntil(cache.put(key, out.clone()));
  return out;
}
