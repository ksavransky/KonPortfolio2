"use strict";var precacheConfig=[["/index.html","ffcc6ec411e314a47de4e15b03e28835"],["/static/css/main.cb77f486.css","a16473c572d7fa66b8104d102d946f78"],["/static/js/main.dd6f842a.js","27a2fe7a1b12060ccc3ad345ec72e66e"],["/static/media/React.21cef5f5.png","21cef5f5ff8f0a831ed1692e91e7154a"],["/static/media/RoR.890959df.png","890959df5a351628971db9f148373349"],["/static/media/algo.b07e78ef.webm","b07e78ef90d6797bcaec17516e82900a"],["/static/media/algotracker.c116fa7f.png","c116fa7fa0dbdb7b489c05c59dae0a1f"],["/static/media/canvas.dea9d7c8.png","dea9d7c898dcc831439770c9a456ab73"],["/static/media/d3.043ff197.png","043ff19740577c2444280e958eadf210"],["/static/media/downarrow.76891365.png","768913652917b4be578e112599500866"],["/static/media/dropdownmenu.1c3e820a.png","1c3e820a2f0c28d96c9dd1a98591ee92"],["/static/media/e.1a252774.jpg","1a252774822239a397486d8dccee6849"],["/static/media/es6.1f0e4175.svg","1f0e4175b8e6b1ff953d76ddb48fc73e"],["/static/media/foundation.561863d1.png","561863d1393d992559c7630e416fe605"],["/static/media/ggbridge-dawn.b3122a59.jpg","b3122a5941c5919f95aada6e0c09309c"],["/static/media/ggbridge-night.7f980c29.jpg","7f980c29cf4efddc1622e32a2ff748dd"],["/static/media/greeting.ffcf8c22.m4a","ffcf8c22541e4fc5781d55a6764e3d6b"],["/static/media/highcharts.3ea03ea6.png","3ea03ea62f3835b5c8396c516077ee9a"],["/static/media/hipstergram.03ca1eab.webm","03ca1eab845b56daf07e0ebeabbc2f14"],["/static/media/htmlcssjs.f1c7356d.png","f1c7356ddaf0aff245269ace1c01d3e3"],["/static/media/jquery.a17b2173.png","a17b21730eae2726978f6829a5a1f004"],["/static/media/markov.484d8519.png","484d8519fcf35db6d54a5e715fd34d9d"],["/static/media/markov.af005e49.webm","af005e493570554190bc2ec726326d2c"],["/static/media/mongo.09ed2051.png","09ed2051ed0b6e784bede6e70c64e9e7"],["/static/media/n.8fcb6f03.jpg","8fcb6f039bb2b922d9285b20ac775297"],["/static/media/ne.c31c8b30.jpg","c31c8b30cfea9d1bfe4252f11f68eabc"],["/static/media/node.f8dab57d.png","f8dab57d048fabd69ea16c67e1615b86"],["/static/media/nw.1e879f2b.jpg","1e879f2bb08f9e5754f09789ada07161"],["/static/media/phpmysql.e406beef.png","e406beefdd477717a645e43296ac9e08"],["/static/media/pong.16b89e56.png","16b89e56ba43adbb292f25232c1befab"],["/static/media/pong.a05e4334.webm","a05e43343facc223b69883b7b407fd1d"],["/static/media/postgresql.4a87f200.png","4a87f200a08a840d0a8ec010cd2c2b80"],["/static/media/reactnative.94a2afdf.png","94a2afdf5adee19f494a4566e7208937"],["/static/media/redux.0696aa54.png","0696aa54c5b646340083d7051dc5f5a7"],["/static/media/s.af787b5c.jpg","af787b5c16c1c529052d68f4d183d1c4"],["/static/media/sass.74c36290.png","74c362907475d0d7f0d59d0fb662135c"],["/static/media/se.5b8fe22c.jpg","5b8fe22cffca256606cb82729019c490"],["/static/media/sf-downtown-night2.c8fa044e.jpg","c8fa044eae428bd2e157b7631cf77f08"],["/static/media/straight.bb91f6af.jpg","bb91f6afc1fae9de8e7c493420406c84"],["/static/media/sw.9957d30b.jpg","9957d30b53dc94cc1adf95cb1f998294"],["/static/media/w.f9ee8670.jpg","f9ee867036248c1743b8c02f6684149d"],["/static/media/webpack.013c7c81.png","013c7c81bcf284a748b1bdf1671a03ba"],["/static/media/wordpress.87c5a403.png","87c5a40352dd5c96d9f9018b7142682a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});