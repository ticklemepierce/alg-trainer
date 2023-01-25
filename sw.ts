// import { precacheAndRoute } from "workbox-precaching";
// import { createHandlerBoundToURL } from "workbox-precaching";
// import { NavigationRoute, registerRoute } from "workbox-routing";

// precacheAndRoute((self as any).__WB_MANIFEST);

// const handler = createHandlerBoundToURL("index.html");
// const navigationRoute = new NavigationRoute(handler);
// registerRoute(navigationRoute);

import {
  pageCache,
  imageCache,
  staticResourceCache,
  googleFontsCache,
  offlineFallback,
} from "workbox-recipes";

pageCache();

googleFontsCache();

staticResourceCache();

imageCache();

offlineFallback();
