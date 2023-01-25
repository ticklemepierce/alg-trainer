import { precacheAndRoute } from "workbox-precaching";
import { createHandlerBoundToURL } from "workbox-precaching";
import { NavigationRoute, registerRoute } from "workbox-routing";
import { NetworkFirst } from "workbox-strategies";

precacheAndRoute(
  (self as any).__WB_MANIFEST.filter((file) => !file.url.includes("index.js"))
);

registerRoute(new NavigationRoute(createHandlerBoundToURL("index.html")));
registerRoute(
  ({ url }) => url.pathname.includes("index.js"),
  new NetworkFirst()
);
