'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8847d319a38397d31bce10b000ce0897",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/A1.png": "8831cc260e063f0b6e0d6c5b70856b98",
"assets/images/A2.png": "8018de55ebef995c74df00e0777504c2",
"assets/images/A3.png": "b0a9db706779321d06234a64e9f26b80",
"assets/images/A4.png": "120ea5a3edfb1e676efbcbbeb01dfff3",
"assets/images/A5.png": "4de3276fdd3f7b55bd6671d466356b88",
"assets/images/Abd.jpg": "6899ca39d6fb3af4d267a24613ab0d9b",
"assets/images/Ahmed_s.jpg": "39bb1c3f57f3f798eb515bc608f43fec",
"assets/images/Ardunio.png": "89839f31ddd963b5dccc538ef4b46c69",
"assets/images/ATC.jpg": "b1a51d4697e3210201904422e5c2e291",
"assets/images/C1.png": "7c8ed606ff634c21b509e037199fac2b",
"assets/images/C2.png": "17f93d90f0d11c1fa4cacf423c237dd5",
"assets/images/C3.png": "0ec334eea5a0a718bb7b8a75de5fc25a",
"assets/images/C4.png": "7dc45921d6ad8edb273eef386236e35c",
"assets/images/C5.png": "b992339c48b2165bc17e9a5fa5ce8160",
"assets/images/C6.png": "1a3c50d9f765a252729486c559b53447",
"assets/images/C7.png": "3f33647794c84b88f9f7d91ece9f7f21",
"assets/images/C8.png": "51e671892f587ce7a626a49fe835bd13",
"assets/images/C9.png": "025a59906b7c9dbb3c2732331772053d",
"assets/images/Company.png": "39a76aba5faa74207c4fccc9a076b795",
"assets/images/csharp.png": "2d19a5abb1e4e4a60553b314e746eb70",
"assets/images/EX11.png": "f3ef172ff74e315f801b0e40b233ea59",
"assets/images/EX12.png": "6502a1c3281d0ec2cfee250c813ae1c3",
"assets/images/EX21.png": "58a56577c6fd2b28d1340d323d9ba993",
"assets/images/EX22.png": "0644ac9d70cbb3826ef89f34b799c4d0",
"assets/images/EX31.png": "1c8f0bf83c9db9305144b917008d1ee8",
"assets/images/EX32.png": "1a6d0ddb03dbf1c9f246fdba90c1cda8",
"assets/images/EX41.png": "628c0fb8d307c9d06c73d0a2a0b57815",
"assets/images/EX42.png": "4b40ec66708a3df28e37a92736bae3b7",
"assets/images/EX51.jpg": "6c8f2bf1bb090a0867aba5389d93d687",
"assets/images/EX52.png": "9aecb9b232b5bda26d5ef6e8a8437fa8",
"assets/images/EX61.jpg": "f21da3c6a72fa5d2a2088806e4f8b1be",
"assets/images/Facebook-logo.png": "8efab2382068a2c28569f118745c592e",
"assets/images/Facebook.jpg": "3083cb03a2eeadd4db4c0aefd7147af3",
"assets/images/Flutter.png": "c64fd0db1bb1e2bb5d4ccd5306eca95f",
"assets/images/Gmail.png": "34b691a4f2743afcef57db6006469761",
"assets/images/Hazem.jpg": "d6a00fc60514dbc4dcf578225a5367eb",
"assets/images/Hidden.jpg": "3fb25f075407057461a217c8f3980c87",
"assets/images/Js.jpg": "0e60883bf83ca1383e568a3247d5f866",
"assets/images/Linkedin.png": "a78cfc73890e499ac2118eadacbf1897",
"assets/images/ML.jpg": "9425425ad32e20ba2ed7b8629ce9400a",
"assets/images/Mohammed_Abd.jpg": "043f0a07d11373b8941a053746896b19",
"assets/images/Phone.png": "5b9e5e63269b28fcd71c6f2f0dbb8089",
"assets/images/Python.jpg": "2d8b014b625aeb5319f3b4fd1cccdece",
"assets/images/Resume.png": "093edd88c5077cd622844f7a9a56ff06",
"assets/images/Selenim.png": "0b47344e139f43b0fd99502a1dcf8755",
"assets/images/SQlite.jpg": "50d629ef60091faf64436318a041d1f5",
"assets/images/T1.jpg": "227a43922977baf9ce972c711e155492",
"assets/images/TA11.jpg": "f92e1fff6e85a711867e2181bcaaa201",
"assets/images/Youtube.jpg": "d58147ff803ec967f2c1ee728d589f10",
"assets/images/Youtube.png": "ed464358e9c9dbca92c67e955f47f0cf",
"assets/NOTICES": "97f50605f6b8cb8429e7045cfd62917a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "8ae00b472ec3937a5bee52055d6bc8b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1f62d8941178f3d22a6a53795869bf07",
"/": "1f62d8941178f3d22a6a53795869bf07",
"main.dart.js": "7e50a18168c7ded169ba5f680b35b61a",
"manifest.json": "3ffd0eb1c219c58ad473c11346ee7ef8",
"version.json": "9afe24c16352eb1de24f6df78d304104"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
