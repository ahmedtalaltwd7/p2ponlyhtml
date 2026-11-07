LocalDrop QR libraries

The browser builds are included in assets/vendor and are loaded locally, so QR
generation and scanning work offline after the app has been opened once.

- assets/vendor/qrcode.js: qrcode-generator by Kazuhiko Arase, MIT license.
- assets/vendor/jsQR.js: jsQR by Cosmo Wolfe, Apache-2.0 license. This is used
  for camera scanning when the browser does not provide BarcodeDetector.

The service worker caches both files for offline use. Android Chrome may use its
built-in BarcodeDetector instead of jsQR.
