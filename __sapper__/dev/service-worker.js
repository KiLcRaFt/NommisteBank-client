(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1728937393083;

	const files = [
		"/service-worker-index.html",
		"/favicon.png",
		"/global.css",
		"/logo-192.png",
		"/logo-512.png",
		"/manifest.json",
		"/vendor/bootstrap/bootstrap-grid.css",
		"/vendor/bootstrap/bootstrap-grid.css.map",
		"/vendor/bootstrap/bootstrap-grid.min.css",
		"/vendor/bootstrap/bootstrap-grid.min.css.map",
		"/vendor/bootstrap/bootstrap-grid.rtl.css",
		"/vendor/bootstrap/bootstrap-grid.rtl.css.map",
		"/vendor/bootstrap/bootstrap-grid.rtl.min.css",
		"/vendor/bootstrap/bootstrap-grid.rtl.min.css.map",
		"/vendor/bootstrap/bootstrap-reboot.css",
		"/vendor/bootstrap/bootstrap-reboot.css.map",
		"/vendor/bootstrap/bootstrap-reboot.min.css",
		"/vendor/bootstrap/bootstrap-reboot.min.css.map",
		"/vendor/bootstrap/bootstrap-reboot.rtl.css",
		"/vendor/bootstrap/bootstrap-reboot.rtl.css.map",
		"/vendor/bootstrap/bootstrap-reboot.rtl.min.css",
		"/vendor/bootstrap/bootstrap-reboot.rtl.min.css.map",
		"/vendor/bootstrap/bootstrap-utilities.css",
		"/vendor/bootstrap/bootstrap-utilities.css.map",
		"/vendor/bootstrap/bootstrap-utilities.min.css",
		"/vendor/bootstrap/bootstrap-utilities.min.css.map",
		"/vendor/bootstrap/bootstrap-utilities.rtl.css",
		"/vendor/bootstrap/bootstrap-utilities.rtl.css.map",
		"/vendor/bootstrap/bootstrap-utilities.rtl.min.css",
		"/vendor/bootstrap/bootstrap-utilities.rtl.min.css.map",
		"/vendor/bootstrap/bootstrap.bundle.js",
		"/vendor/bootstrap/bootstrap.bundle.js.map",
		"/vendor/bootstrap/bootstrap.bundle.min.js",
		"/vendor/bootstrap/bootstrap.bundle.min.js.map",
		"/vendor/bootstrap/bootstrap.css",
		"/vendor/bootstrap/bootstrap.css.map",
		"/vendor/bootstrap/bootstrap.esm.js",
		"/vendor/bootstrap/bootstrap.esm.js.map",
		"/vendor/bootstrap/bootstrap.esm.min.js",
		"/vendor/bootstrap/bootstrap.esm.min.js.map",
		"/vendor/bootstrap/bootstrap.js",
		"/vendor/bootstrap/bootstrap.js.map",
		"/vendor/bootstrap/bootstrap.min.css",
		"/vendor/bootstrap/bootstrap.min.css.map",
		"/vendor/bootstrap/bootstrap.min.js",
		"/vendor/bootstrap/bootstrap.min.js.map",
		"/vendor/bootstrap/bootstrap.rtl.css",
		"/vendor/bootstrap/bootstrap.rtl.css.map",
		"/vendor/bootstrap/bootstrap.rtl.min.css",
		"/vendor/bootstrap/bootstrap.rtl.min.css.map",
		"/vendor/bootstrap/css/bootstrap-grid.css",
		"/vendor/bootstrap/css/bootstrap-grid.css.map",
		"/vendor/bootstrap/css/bootstrap-grid.min.css",
		"/vendor/bootstrap/css/bootstrap-grid.min.css.map",
		"/vendor/bootstrap/css/bootstrap-grid.rtl.css",
		"/vendor/bootstrap/css/bootstrap-grid.rtl.css.map",
		"/vendor/bootstrap/css/bootstrap-grid.rtl.min.css",
		"/vendor/bootstrap/css/bootstrap-grid.rtl.min.css.map",
		"/vendor/bootstrap/css/bootstrap-reboot.css",
		"/vendor/bootstrap/css/bootstrap-reboot.css.map",
		"/vendor/bootstrap/css/bootstrap-reboot.min.css",
		"/vendor/bootstrap/css/bootstrap-reboot.min.css.map",
		"/vendor/bootstrap/css/bootstrap-reboot.rtl.css",
		"/vendor/bootstrap/css/bootstrap-reboot.rtl.css.map",
		"/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css",
		"/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css.map",
		"/vendor/bootstrap/css/bootstrap-utilities.css",
		"/vendor/bootstrap/css/bootstrap-utilities.css.map",
		"/vendor/bootstrap/css/bootstrap-utilities.min.css",
		"/vendor/bootstrap/css/bootstrap-utilities.min.css.map",
		"/vendor/bootstrap/css/bootstrap-utilities.rtl.css",
		"/vendor/bootstrap/css/bootstrap-utilities.rtl.css.map",
		"/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css",
		"/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css.map",
		"/vendor/bootstrap/css/bootstrap.css",
		"/vendor/bootstrap/css/bootstrap.css.map",
		"/vendor/bootstrap/css/bootstrap.min.css",
		"/vendor/bootstrap/css/bootstrap.min.css.map",
		"/vendor/bootstrap/css/bootstrap.rtl.css",
		"/vendor/bootstrap/css/bootstrap.rtl.css.map",
		"/vendor/bootstrap/css/bootstrap.rtl.min.css",
		"/vendor/bootstrap/css/bootstrap.rtl.min.css.map",
		"/vendor/bootstrap/js/bootstrap.bundle.js",
		"/vendor/bootstrap/js/bootstrap.bundle.js.map",
		"/vendor/bootstrap/js/bootstrap.bundle.min.js",
		"/vendor/bootstrap/js/bootstrap.bundle.min.js.map",
		"/vendor/bootstrap/js/bootstrap.esm.js",
		"/vendor/bootstrap/js/bootstrap.esm.js.map",
		"/vendor/bootstrap/js/bootstrap.esm.min.js",
		"/vendor/bootstrap/js/bootstrap.esm.min.js.map",
		"/vendor/bootstrap/js/bootstrap.js",
		"/vendor/bootstrap/js/bootstrap.js.map",
		"/vendor/bootstrap/js/bootstrap.min.js",
		"/vendor/bootstrap/js/bootstrap.min.js.map",
		"/vendor/jquery/jquery.js",
		"/vendor/jquery/jquery.min.js",
		"/vendor/jquery/jquery.min.map",
		"/vendor/jquery/jquery.slim.js",
		"/vendor/jquery/jquery.slim.min.js",
		"/vendor/jquery/jquery.slim.min.map"
	];

	const shell = [
		"/client/client.08b39133.js",
		"/client/inject_styles.5607aec6.js",
		"/client/index.c2aa3425.js",
		"/client/overview.32b28045.js",
		"/client/register.069fabfd.js",
		"/client/about.5789099f.js",
		"/client/login.d0b0ca78.js",
		"/client/index.b7e98fff.js",
		"/client/_slug_.b97f0c77.js",
		"/client/sapper-dev-client.1e7a4a5e.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const staticAssets = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});


	/**
	 * Fetch the asset from the network and store it in the cache. 
	 * Fall back to the cache if the user is offline.
	 */
	async function fetchAndCache(request) {
		const cache = await caches.open(`offline${timestamp}`);

		try {
			const response = await fetch(request);
			cache.put(request, response.clone());
			return response;
		} catch (err) {
			const response = await cache.match(request);
			if (response) return response;

			throw err;
		}
	}

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		const isHttp = url.protocol.startsWith('http');
		const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
		const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
		const skipBecauseUncached = event.request.cache === 'only-if-cached' && !isStaticAsset;

		if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
			event.respondWith(
				(async () => {
					// always serve static files and bundler-generated assets from cache.
					// if your application has other URLs with data that will never change,
					// set this variable to true for them and they will only be fetched once.
					const cachedAsset = isStaticAsset && await caches.match(event.request);

					// for pages, you might want to serve a shell `service-worker-index.html` file,
					// which Sapper has generated for you. It's not right for every
					// app, but if it's right for yours then uncomment this section
					/*
					if (!cachedAsset && url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
						return caches.match('/service-worker-index.html');
					}
					*/

					return cachedAsset || fetchAndCache(event.request);
				})()
			);
		}
	});

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTcyODkzNzM5MzA4MztcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcIi9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sXCIsXG5cdFwiL2Zhdmljb24ucG5nXCIsXG5cdFwiL2dsb2JhbC5jc3NcIixcblx0XCIvbG9nby0xOTIucG5nXCIsXG5cdFwiL2xvZ28tNTEyLnBuZ1wiLFxuXHRcIi9tYW5pZmVzdC5qc29uXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLWdyaWQuY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLWdyaWQuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC1ncmlkLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtZ3JpZC5taW4uY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC1ncmlkLnJ0bC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtZ3JpZC5ydGwuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC1ncmlkLnJ0bC5taW4uY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLWdyaWQucnRsLm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXJlYm9vdC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtcmVib290LmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtcmVib290Lm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtcmVib290Lm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXJlYm9vdC5ydGwuY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXJlYm9vdC5ydGwuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC1yZWJvb3QucnRsLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtcmVib290LnJ0bC5taW4uY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC11dGlsaXRpZXMuY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXV0aWxpdGllcy5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXV0aWxpdGllcy5taW4uY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXV0aWxpdGllcy5taW4uY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC11dGlsaXRpZXMucnRsLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC11dGlsaXRpZXMucnRsLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAtdXRpbGl0aWVzLnJ0bC5taW4uY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLXV0aWxpdGllcy5ydGwubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAuYnVuZGxlLmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLmJ1bmRsZS5qcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5lc20uanNcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAuZXNtLmpzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5lc20ubWluLmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLmVzbS5taW4uanMubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLmpzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5taW4uY3NzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLm1pbi5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcC5taW4uanMubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwLnJ0bC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAucnRsLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAucnRsLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXAucnRsLm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC1ncmlkLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtZ3JpZC5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC1ncmlkLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLWdyaWQubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLWdyaWQucnRsLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtZ3JpZC5ydGwuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtZ3JpZC5ydGwubWluLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtZ3JpZC5ydGwubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXJlYm9vdC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXJlYm9vdC5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC1yZWJvb3QubWluLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtcmVib290Lm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC1yZWJvb3QucnRsLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtcmVib290LnJ0bC5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC1yZWJvb3QucnRsLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXJlYm9vdC5ydGwubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXV0aWxpdGllcy5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXV0aWxpdGllcy5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC11dGlsaXRpZXMubWluLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtdXRpbGl0aWVzLm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC11dGlsaXRpZXMucnRsLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAtdXRpbGl0aWVzLnJ0bC5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC11dGlsaXRpZXMucnRsLm1pbi5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXV0aWxpdGllcy5ydGwubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAuY3NzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLnJ0bC5jc3NcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLnJ0bC5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5ydGwubWluLmNzc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAucnRsLm1pbi5jc3MubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvanMvYm9vdHN0cmFwLmJ1bmRsZS5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5idW5kbGUuanMubWFwXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAuZXNtLmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvanMvYm9vdHN0cmFwLmVzbS5qcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAuZXNtLm1pbi5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5lc20ubWluLmpzLm1hcFwiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5qc1wiLFxuXHRcIi92ZW5kb3IvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5qcy5tYXBcIixcblx0XCIvdmVuZG9yL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAubWluLmpzXCIsXG5cdFwiL3ZlbmRvci9ib290c3RyYXAvanMvYm9vdHN0cmFwLm1pbi5qcy5tYXBcIixcblx0XCIvdmVuZG9yL2pxdWVyeS9qcXVlcnkuanNcIixcblx0XCIvdmVuZG9yL2pxdWVyeS9qcXVlcnkubWluLmpzXCIsXG5cdFwiL3ZlbmRvci9qcXVlcnkvanF1ZXJ5Lm1pbi5tYXBcIixcblx0XCIvdmVuZG9yL2pxdWVyeS9qcXVlcnkuc2xpbS5qc1wiLFxuXHRcIi92ZW5kb3IvanF1ZXJ5L2pxdWVyeS5zbGltLm1pbi5qc1wiLFxuXHRcIi92ZW5kb3IvanF1ZXJ5L2pxdWVyeS5zbGltLm1pbi5tYXBcIlxuXTtcbmV4cG9ydCB7IGZpbGVzIGFzIGFzc2V0cyB9OyAvLyBsZWdhY3lcblxuZXhwb3J0IGNvbnN0IHNoZWxsID0gW1xuXHRcIi9jbGllbnQvY2xpZW50LjA4YjM5MTMzLmpzXCIsXG5cdFwiL2NsaWVudC9pbmplY3Rfc3R5bGVzLjU2MDdhZWM2LmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC5jMmFhMzQyNS5qc1wiLFxuXHRcIi9jbGllbnQvb3ZlcnZpZXcuMzJiMjgwNDUuanNcIixcblx0XCIvY2xpZW50L3JlZ2lzdGVyLjA2OWZhYmZkLmpzXCIsXG5cdFwiL2NsaWVudC9hYm91dC41Nzg5MDk5Zi5qc1wiLFxuXHRcIi9jbGllbnQvbG9naW4uZDBiMGNhNzguanNcIixcblx0XCIvY2xpZW50L2luZGV4LmI3ZTk4ZmZmLmpzXCIsXG5cdFwiL2NsaWVudC9fc2x1Z18uYjk3ZjBjNzcuanNcIixcblx0XCIvY2xpZW50L3NhcHBlci1kZXYtY2xpZW50LjFlN2E0YTVlLmpzXCJcbl07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG5cdHsgcGF0dGVybjogL15cXC8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvb3ZlcnZpZXdcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3JlZ2lzdGVyXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9hYm91dFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvbG9naW5cXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Jsb2dcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Jsb2dcXC8oW14vXSs/KVxcLz8kLyB9XG5dOyIsImltcG9ydCB7IHRpbWVzdGFtcCwgZmlsZXMsIHNoZWxsIH0gZnJvbSAnQHNhcHBlci9zZXJ2aWNlLXdvcmtlcic7XHJcblxyXG5jb25zdCBBU1NFVFMgPSBgY2FjaGUke3RpbWVzdGFtcH1gO1xyXG5cclxuLy8gYHNoZWxsYCBpcyBhbiBhcnJheSBvZiBhbGwgdGhlIGZpbGVzIGdlbmVyYXRlZCBieSB0aGUgYnVuZGxlcixcclxuLy8gYGZpbGVzYCBpcyBhbiBhcnJheSBvZiBldmVyeXRoaW5nIGluIHRoZSBgc3RhdGljYCBkaXJlY3RvcnlcclxuY29uc3QgdG9fY2FjaGUgPSBzaGVsbC5jb25jYXQoZmlsZXMpO1xyXG5jb25zdCBzdGF0aWNBc3NldHMgPSBuZXcgU2V0KHRvX2NhY2hlKTtcclxuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGV2ZW50ID0+IHtcclxuXHRldmVudC53YWl0VW50aWwoXHJcblx0XHRjYWNoZXNcclxuXHRcdFx0Lm9wZW4oQVNTRVRTKVxyXG5cdFx0XHQudGhlbihjYWNoZSA9PiBjYWNoZS5hZGRBbGwodG9fY2FjaGUpKVxyXG5cdFx0XHQudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0c2VsZi5za2lwV2FpdGluZygpO1xyXG5cdFx0XHR9KVxyXG5cdCk7XHJcbn0pO1xyXG5cclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGV2ZW50ID0+IHtcclxuXHRldmVudC53YWl0VW50aWwoXHJcblx0XHRjYWNoZXMua2V5cygpLnRoZW4oYXN5bmMga2V5cyA9PiB7XHJcblx0XHRcdC8vIGRlbGV0ZSBvbGQgY2FjaGVzXHJcblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuXHRcdFx0XHRpZiAoa2V5ICE9PSBBU1NFVFMpIGF3YWl0IGNhY2hlcy5kZWxldGUoa2V5KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2VsZi5jbGllbnRzLmNsYWltKCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcbn0pO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBGZXRjaCB0aGUgYXNzZXQgZnJvbSB0aGUgbmV0d29yayBhbmQgc3RvcmUgaXQgaW4gdGhlIGNhY2hlLiBcclxuICogRmFsbCBiYWNrIHRvIHRoZSBjYWNoZSBpZiB0aGUgdXNlciBpcyBvZmZsaW5lLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbmRDYWNoZShyZXF1ZXN0KSB7XHJcblx0Y29uc3QgY2FjaGUgPSBhd2FpdCBjYWNoZXMub3Blbihgb2ZmbGluZSR7dGltZXN0YW1wfWApXHJcblxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xyXG5cdFx0Y2FjaGUucHV0KHJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWNoZS5tYXRjaChyZXF1ZXN0KTtcclxuXHRcdGlmIChyZXNwb25zZSkgcmV0dXJuIHJlc3BvbnNlO1xyXG5cclxuXHRcdHRocm93IGVycjtcclxuXHR9XHJcbn1cclxuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBldmVudCA9PiB7XHJcblx0aWYgKGV2ZW50LnJlcXVlc3QubWV0aG9kICE9PSAnR0VUJyB8fCBldmVudC5yZXF1ZXN0LmhlYWRlcnMuaGFzKCdyYW5nZScpKSByZXR1cm47XHJcblxyXG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoZXZlbnQucmVxdWVzdC51cmwpO1xyXG5cclxuXHQvLyBkb24ndCB0cnkgdG8gaGFuZGxlIGUuZy4gZGF0YTogVVJJc1xyXG5cdGNvbnN0IGlzSHR0cCA9IHVybC5wcm90b2NvbC5zdGFydHNXaXRoKCdodHRwJyk7XHJcblx0Y29uc3QgaXNEZXZTZXJ2ZXJSZXF1ZXN0ID0gdXJsLmhvc3RuYW1lID09PSBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICYmIHVybC5wb3J0ICE9PSBzZWxmLmxvY2F0aW9uLnBvcnQ7XHJcblx0Y29uc3QgaXNTdGF0aWNBc3NldCA9IHVybC5ob3N0ID09PSBzZWxmLmxvY2F0aW9uLmhvc3QgJiYgc3RhdGljQXNzZXRzLmhhcyh1cmwucGF0aG5hbWUpO1xyXG5cdGNvbnN0IHNraXBCZWNhdXNlVW5jYWNoZWQgPSBldmVudC5yZXF1ZXN0LmNhY2hlID09PSAnb25seS1pZi1jYWNoZWQnICYmICFpc1N0YXRpY0Fzc2V0O1xyXG5cclxuXHRpZiAoaXNIdHRwICYmICFpc0RldlNlcnZlclJlcXVlc3QgJiYgIXNraXBCZWNhdXNlVW5jYWNoZWQpIHtcclxuXHRcdGV2ZW50LnJlc3BvbmRXaXRoKFxyXG5cdFx0XHQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRcdC8vIGFsd2F5cyBzZXJ2ZSBzdGF0aWMgZmlsZXMgYW5kIGJ1bmRsZXItZ2VuZXJhdGVkIGFzc2V0cyBmcm9tIGNhY2hlLlxyXG5cdFx0XHRcdC8vIGlmIHlvdXIgYXBwbGljYXRpb24gaGFzIG90aGVyIFVSTHMgd2l0aCBkYXRhIHRoYXQgd2lsbCBuZXZlciBjaGFuZ2UsXHJcblx0XHRcdFx0Ly8gc2V0IHRoaXMgdmFyaWFibGUgdG8gdHJ1ZSBmb3IgdGhlbSBhbmQgdGhleSB3aWxsIG9ubHkgYmUgZmV0Y2hlZCBvbmNlLlxyXG5cdFx0XHRcdGNvbnN0IGNhY2hlZEFzc2V0ID0gaXNTdGF0aWNBc3NldCAmJiBhd2FpdCBjYWNoZXMubWF0Y2goZXZlbnQucmVxdWVzdCk7XHJcblxyXG5cdFx0XHRcdC8vIGZvciBwYWdlcywgeW91IG1pZ2h0IHdhbnQgdG8gc2VydmUgYSBzaGVsbCBgc2VydmljZS13b3JrZXItaW5kZXguaHRtbGAgZmlsZSxcclxuXHRcdFx0XHQvLyB3aGljaCBTYXBwZXIgaGFzIGdlbmVyYXRlZCBmb3IgeW91LiBJdCdzIG5vdCByaWdodCBmb3IgZXZlcnlcclxuXHRcdFx0XHQvLyBhcHAsIGJ1dCBpZiBpdCdzIHJpZ2h0IGZvciB5b3VycyB0aGVuIHVuY29tbWVudCB0aGlzIHNlY3Rpb25cclxuXHRcdFx0XHQvKlxyXG5cdFx0XHRcdGlmICghY2FjaGVkQXNzZXQgJiYgdXJsLm9yaWdpbiA9PT0gc2VsZi5vcmlnaW4gJiYgcm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUucGF0dGVybi50ZXN0KHVybC5wYXRobmFtZSkpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gY2FjaGVzLm1hdGNoKCcvc2VydmljZS13b3JrZXItaW5kZXguaHRtbCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQqL1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gY2FjaGVkQXNzZXQgfHwgZmV0Y2hBbmRDYWNoZShldmVudC5yZXF1ZXN0KTtcclxuXHRcdFx0fSkoKVxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0NBQUE7Q0FDTyxNQUFNLFNB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
