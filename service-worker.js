"use strict";var precacheConfig=[["https://andrewtpoe.github.io/react-companies/index.html","8415b1ea3c1c17f5357895b9e045d2be"],["https://andrewtpoe.github.io/react-companies/static/js/0.25dbba1b.chunk.js","a580ef8532ae60ea293eb0cb98ed045a"],["https://andrewtpoe.github.io/react-companies/static/js/1.2e112218.chunk.js","09d4b5f4e31bced440d665986ded4cf9"],["https://andrewtpoe.github.io/react-companies/static/js/2.e7bc4b73.chunk.js","0e4c309d6068a10bf1aad29f5dacd32b"],["https://andrewtpoe.github.io/react-companies/static/js/3.84876101.chunk.js","457bd5bf412eb7e465e36ec1e3d33ad5"],["https://andrewtpoe.github.io/react-companies/static/js/4.7a681fd1.chunk.js","01b5956e6cfaefb2b14c852258183c00"],["https://andrewtpoe.github.io/react-companies/static/js/main.9f18d8cb.js","1c85a54c4bb1993f9ac5d12c3dfa86ff"],["https://andrewtpoe.github.io/react-companies/static/media/loading.31ef9d49.svg","31ef9d4912ea393d8ba29ea5eb5e3675"],["https://andrewtpoe.github.io/react-companies/static/media/react-companies-logo-transparent.44448c2e.svg","44448c2edc3dc7ea1392dab809254136"],["https://andrewtpoe.github.io/react-companies/static/media/react-logo-grey.efe2dcf1.svg","efe2dcf1fc9f8a2b682a15ca541b47c8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="https://andrewtpoe.github.io/react-companies/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});