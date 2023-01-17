/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/mobile/mobile.ts ***!
  \******************************/
// You can use the ESModules syntax and @kintone/rest-api-client without additional settings.
// import { KintoneRestAPIClient } from "@kintone/rest-api-client";

// @ts-expect-error
var PLUGIN_ID = kintone.$PLUGIN_ID;
kintone.events.on('mobile.app.record.index.show', function () {
  var config = kintone.plugin.app.getConfig(PLUGIN_ID);
  var spaceElement = kintone.mobile.app.getHeaderSpaceElement();
  if (spaceElement === null) {
    throw new Error('The header element is unavailable on this page');
  }
  var fragment = document.createDocumentFragment();
  var headingEl = document.createElement('h3');
  var messageEl = document.createElement('p');
  messageEl.classList.add('plugin-space-message');
  messageEl.textContent = config.message;
  headingEl.classList.add('plugin-space-heading');
  headingEl.textContent = 'Hello kintone plugin!';
  fragment.appendChild(headingEl);
  fragment.appendChild(messageEl);
  spaceElement.appendChild(fragment);
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bvc3RudW1iZXIvLi9zcmMvbW9iaWxlL21vYmlsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBZb3UgY2FuIHVzZSB0aGUgRVNNb2R1bGVzIHN5bnRheCBhbmQgQGtpbnRvbmUvcmVzdC1hcGktY2xpZW50IHdpdGhvdXQgYWRkaXRpb25hbCBzZXR0aW5ncy5cbi8vIGltcG9ydCB7IEtpbnRvbmVSZXN0QVBJQ2xpZW50IH0gZnJvbSBcIkBraW50b25lL3Jlc3QtYXBpLWNsaWVudFwiO1xuXG4vLyBAdHMtZXhwZWN0LWVycm9yXG5jb25zdCBQTFVHSU5fSUQgPSBraW50b25lLiRQTFVHSU5fSURcblxua2ludG9uZS5ldmVudHMub24oJ21vYmlsZS5hcHAucmVjb3JkLmluZGV4LnNob3cnLCAoKSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IGtpbnRvbmUucGx1Z2luLmFwcC5nZXRDb25maWcoUExVR0lOX0lEKVxuXG4gIGNvbnN0IHNwYWNlRWxlbWVudCA9IGtpbnRvbmUubW9iaWxlLmFwcC5nZXRIZWFkZXJTcGFjZUVsZW1lbnQoKVxuICBpZiAoc3BhY2VFbGVtZW50ID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgaGVhZGVyIGVsZW1lbnQgaXMgdW5hdmFpbGFibGUgb24gdGhpcyBwYWdlJylcbiAgfVxuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICBjb25zdCBoZWFkaW5nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIGNvbnN0IG1lc3NhZ2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXG4gIG1lc3NhZ2VFbC5jbGFzc0xpc3QuYWRkKCdwbHVnaW4tc3BhY2UtbWVzc2FnZScpXG4gIG1lc3NhZ2VFbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gIGhlYWRpbmdFbC5jbGFzc0xpc3QuYWRkKCdwbHVnaW4tc3BhY2UtaGVhZGluZycpXG4gIGhlYWRpbmdFbC50ZXh0Q29udGVudCA9ICdIZWxsbyBraW50b25lIHBsdWdpbiEnXG5cbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZ0VsKVxuICBmcmFnbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlRWwpXG4gIHNwYWNlRWxlbWVudC5hcHBlbmRDaGlsZChmcmFnbWVudClcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=