'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "9dc93da86da6ce4748609f077471519e",
"main.dart.js": "b5824ea4fd128830b8ce41c25e180c95",
"manifest.json": "52ceaf1a06581308206d3322dfb87a03",
"assets/FontManifest.json": "1f51acc04e4851844466921643394958",
"assets/assets/selectTagPage/%25E3%2583%2586%25E3%2582%25AF%25E3%2583%258E%25E3%2583%25AD%25E3%2582%25B8%25E3%2583%25BC.png": "b17eff8d889f50105ac4c4fc69980a86",
"assets/assets/selectTagPage/%25E3%2582%25B9%25E3%2583%259D%25E3%2583%25BC%25E3%2583%2584.png": "2de79d9ba0a93ff884c1fe307dfb0d3a",
"assets/assets/selectTagPage/%25E6%259B%25B8%25E7%25B1%258D.png": "4aa95bb00ebfbea0863d0509897a5b81",
"assets/assets/selectTagPage/%25E6%2581%258B%25E6%2584%259B.png": "d4ed194630fa17687c8c2e18d62da3e7",
"assets/assets/selectTagPage/%25E6%2598%25A0%25E7%2594%25BB.png": "c5e2f880c55032060cb03e809216c4b8",
"assets/assets/selectTagPage/%25E9%25A3%259F%25E4%25BA%258B.png": "7b975c1932b74a08dd5f7d1cb66b1c2e",
"assets/assets/selectTagPage/YouTube.png": "8313aaccf2f4b6aecb32ba53480bf5c1",
"assets/assets/selectTagPage/%25E7%25B5%258C%25E6%25B8%2588.png": "5fe4ce696fa56e34df1839e5db42f387",
"assets/assets/selectTagPage/%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25BF%25E3%2583%25A1.png": "370cdc03e4cb5e1b9fab2806afc2036a",
"assets/assets/selectTagPage/%25E3%2582%25A2%25E3%2583%258B%25E3%2583%25A1%25E3%2583%25BB%25E6%25BC%25AB%25E7%2594%25BB.png": "a12096a156583a86d3815ad2d40a22ce",
"assets/assets/selectTagPage/%25E6%2596%2599%25E7%2590%2586.png": "848ac73085651237f638c71fbdc9dcc5",
"assets/assets/selectTagPage/%25E9%259F%25B3%25E6%25A5%25BD.png": "a8ae593615749735203f1d83e5b0517d",
"assets/assets/searchPage/%25E3%2582%25B9%25E3%2583%259D%25E3%2583%25BC%25E3%2583%2584.png": "53a0cde05f496500a1951630c454b1a6",
"assets/assets/searchPage/%25E8%25B6%25A3%25E5%2591%25B3.png": "75970a2bff90dd4d1957e439022d0361",
"assets/assets/searchPage/%25E3%2582%25B3%25E3%2583%259F%25E3%2583%25A5%25E3%2583%258B%25E3%2583%2586%25E3%2582%25A3.png": "6721305a062389d39fd002ccc42e6180",
"assets/assets/searchPage/%25E3%2583%259C%25E3%2583%25A9%25E3%2583%25B3%25E3%2583%2586%25E3%2582%25A3%25E3%2582%25A2.png": "88ee811d9d56976c586079f64f72c77b",
"assets/assets/searchPage/%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25BF%25E3%2583%25A1%25EF%25BC%2592.png": "2b30aae713a66fff2694178a3d1ce0c2",
"assets/assets/searchPage/%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25BF%25E3%2583%25A1.png": "e9acba97fc009bb33623c2ee7b0318c3",
"assets/assets/searchPage/%25E3%2581%259D%25E3%2581%25AE%25E4%25BB%2596.png": "b35b2c92df588ab38c570ea1ecc54745",
"assets/assets/searchPage/%25E9%259F%25B3%25E6%25A5%25BD.png": "a9b924df07b2d74787da760e143b9778",
"assets/assets/searchPage/%25E5%25AD%25A6%25E3%2581%25B3.png": "43c683b0902922196e3f1530efda35c5",
"assets/assets/icon/ring-icon-white.png": "8d6aff34240f80efa9cf51a1ff2f9b18",
"assets/assets/icon/shinkan-web.png": "d96b7cfcba8e2f47ee46aed277db6ca7",
"assets/assets/icon/ring-icon_old.png": "2eeea10a0f4193d34e79d60b7609e805",
"assets/assets/icon/ring-icon.png": "fd9a2bd35f6bdf9aa2d67a55e476e2bc",
"assets/assets/icon/ring-icon-color.png": "e3c14c113ef19e431380bdde00e5b64f",
"assets/assets/icon/ring-icon-color_old.png": "9f177206b861142cc985592c8f92e52a",
"assets/assets/icon/ring-icon-round.png": "5dbb5ac03e40f7cd5f5271e98771670e",
"assets/assets/icon/ring-icon-black.png": "8810b4772b6b79d9f335914f2b552a76",
"assets/assets/icon/sns/google-icon-white.png": "d0760a1ab0e6943038243b3ed5710d5c",
"assets/assets/icon/sns/GitHub/GitHub-Mark-Light-64px.png": "eb94bb97c3410733ce017b184d314723",
"assets/assets/icon/sns/GitHub/GitHub-Mark-120px-plus.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"assets/assets/icon/sns/GitHub/GitHub-Mark-64px.png": "438c17272c5f0e9f4a6da34d3e4bc5bd",
"assets/assets/icon/sns/GitHub/GitHub-Mark-Light-120px-plus.png": "472739dfb5857b1f659f4c4c6b4568d0",
"assets/assets/icon/sns/GitHub/GitHub-Mark-32px.png": "f87561b8bb354ef83b09a66e54f70e08",
"assets/assets/icon/sns/GitHub/GitHub-Mark-Light-32px.png": "d56df49a807a9fd06eb1667a84d3810e",
"assets/assets/icon/sns/twitter-icon-white.png": "d7c6644ae020495730a8f1fee7924990",
"assets/assets/icon/sns/Instagram_Icon.png": "1d9b5ce82332c2d098ae2b919d790b07",
"assets/assets/icon/sns/Twitter/2021%2520Twitter%2520logo%2520-%2520blue.png": "7571ea13179d06d922f912f64d14abc6",
"assets/assets/icon/sns/Twitter/2021%2520Twitter%2520logo%2520-%2520black.png": "072692aaa9a15b0ae5014a2572857ea1",
"assets/assets/icon/sns/Twitter/2021%2520Twitter%2520logo%2520-%2520white.png": "1b41a5aecd05df78ba72ba5e9d1a48e8",
"assets/assets/icon/sns/LINE_APP.png": "414687b54e41d424f391df8ca87517e4",
"assets/assets/icon/sns/facebook-icon-white.png": "d91d9bfee2967d937ceb921914d3297b",
"assets/AssetManifest.json": "d62d1c74f9d81a794fb2de0dfaf25457",
"assets/NOTICES": "843b6952c5c3a9094871b9ab8c62333b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/NotoSansCJKjp/NotoSansCJKjp-Regular.otf": "7ed4b9a7daaf1d1c71903a92059434fb",
"assets/fonts/NotoSansCJKjp/NotoSansCJKjp-Bold.otf": "1805644d0919a80051e76e1fc750a189",
"assets/fonts/CorporateLogo/logotypejp_mp_b_1.1.ttf": "ffac0fbc30fbbfa74d32b4affe2ff16c",
"assets/fonts/CorporateLogo/logotypejp_mp_m_1.1.ttf": "d6a77ff8dae5f42a140c937fc48970c2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"index.html": "6bbac8cb6b26ec23a68542b80d9f9a84",
"/": "6bbac8cb6b26ec23a68542b80d9f9a84"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
