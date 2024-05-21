import { precache } from "workbox-precaching";
import { createHandlerBoundToURL } from "workbox-precaching";
import { NavigationRoute, registerRoute } from "workbox-routing";
import { NetworkFirst, StaleWhileRevalidate } from "workbox-strategies";

precache(
  (self as any).__WB_MANIFEST.filter((file) => !file.url.includes("index.js"))
);

registerRoute(new NavigationRoute(createHandlerBoundToURL("index.html")), new StaleWhileRevalidate());
registerRoute(
  ({ url }) => url.pathname.includes("index.js"),
  new NetworkFirst()
);
// registerRoute(
//   ({ url }) => !url.pathname.includes("index.js"),
//   new StaleWhileRevalidate()
// );