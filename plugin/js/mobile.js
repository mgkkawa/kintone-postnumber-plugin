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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXRlbXBsYXRlLy4vc3JjL21vYmlsZS9tb2JpbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gWW91IGNhbiB1c2UgdGhlIEVTTW9kdWxlcyBzeW50YXggYW5kIEBraW50b25lL3Jlc3QtYXBpLWNsaWVudCB3aXRob3V0IGFkZGl0aW9uYWwgc2V0dGluZ3MuXG4vLyBpbXBvcnQgeyBLaW50b25lUmVzdEFQSUNsaWVudCB9IGZyb20gXCJAa2ludG9uZS9yZXN0LWFwaS1jbGllbnRcIjtcblxuLy8gQHRzLWV4cGVjdC1lcnJvclxuY29uc3QgUExVR0lOX0lEID0ga2ludG9uZS4kUExVR0lOX0lEXG5cbmtpbnRvbmUuZXZlbnRzLm9uKCdtb2JpbGUuYXBwLnJlY29yZC5pbmRleC5zaG93JywgKCkgPT4ge1xuICBjb25zdCBjb25maWcgPSBraW50b25lLnBsdWdpbi5hcHAuZ2V0Q29uZmlnKFBMVUdJTl9JRClcblxuICBjb25zdCBzcGFjZUVsZW1lbnQgPSBraW50b25lLm1vYmlsZS5hcHAuZ2V0SGVhZGVyU3BhY2VFbGVtZW50KClcbiAgaWYgKHNwYWNlRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIGhlYWRlciBlbGVtZW50IGlzIHVuYXZhaWxhYmxlIG9uIHRoaXMgcGFnZScpXG4gIH1cbiAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgY29uc3QgaGVhZGluZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBjb25zdCBtZXNzYWdlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcblxuICBtZXNzYWdlRWwuY2xhc3NMaXN0LmFkZCgncGx1Z2luLXNwYWNlLW1lc3NhZ2UnKVxuICBtZXNzYWdlRWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICBoZWFkaW5nRWwuY2xhc3NMaXN0LmFkZCgncGx1Z2luLXNwYWNlLWhlYWRpbmcnKVxuICBoZWFkaW5nRWwudGV4dENvbnRlbnQgPSAnSGVsbG8ga2ludG9uZSBwbHVnaW4hJ1xuXG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKGhlYWRpbmdFbClcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZUVsKVxuICBzcGFjZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpXG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9