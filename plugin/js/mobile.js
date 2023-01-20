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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bvc3RudW1iZXIvLi9zcmMvbW9iaWxlL21vYmlsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBZb3UgY2FuIHVzZSB0aGUgRVNNb2R1bGVzIHN5bnRheCBhbmQgQGtpbnRvbmUvcmVzdC1hcGktY2xpZW50IHdpdGhvdXQgYWRkaXRpb25hbCBzZXR0aW5ncy5cclxuLy8gaW1wb3J0IHsgS2ludG9uZVJlc3RBUElDbGllbnQgfSBmcm9tIFwiQGtpbnRvbmUvcmVzdC1hcGktY2xpZW50XCI7XHJcblxyXG4vLyBAdHMtZXhwZWN0LWVycm9yXHJcbmNvbnN0IFBMVUdJTl9JRCA9IGtpbnRvbmUuJFBMVUdJTl9JRFxyXG5cclxua2ludG9uZS5ldmVudHMub24oJ21vYmlsZS5hcHAucmVjb3JkLmluZGV4LnNob3cnLCAoKSA9PiB7XHJcbiAgY29uc3QgY29uZmlnID0ga2ludG9uZS5wbHVnaW4uYXBwLmdldENvbmZpZyhQTFVHSU5fSUQpXHJcblxyXG4gIGNvbnN0IHNwYWNlRWxlbWVudCA9IGtpbnRvbmUubW9iaWxlLmFwcC5nZXRIZWFkZXJTcGFjZUVsZW1lbnQoKVxyXG4gIGlmIChzcGFjZUVsZW1lbnQgPT09IG51bGwpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignVGhlIGhlYWRlciBlbGVtZW50IGlzIHVuYXZhaWxhYmxlIG9uIHRoaXMgcGFnZScpXHJcbiAgfVxyXG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXHJcbiAgY29uc3QgaGVhZGluZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gIGNvbnN0IG1lc3NhZ2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cclxuICBtZXNzYWdlRWwuY2xhc3NMaXN0LmFkZCgncGx1Z2luLXNwYWNlLW1lc3NhZ2UnKVxyXG4gIG1lc3NhZ2VFbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXHJcbiAgaGVhZGluZ0VsLmNsYXNzTGlzdC5hZGQoJ3BsdWdpbi1zcGFjZS1oZWFkaW5nJylcclxuICBoZWFkaW5nRWwudGV4dENvbnRlbnQgPSAnSGVsbG8ga2ludG9uZSBwbHVnaW4hJ1xyXG5cclxuICBmcmFnbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nRWwpXHJcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZUVsKVxyXG4gIHNwYWNlRWxlbWVudC5hcHBlbmRDaGlsZChmcmFnbWVudClcclxufSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9