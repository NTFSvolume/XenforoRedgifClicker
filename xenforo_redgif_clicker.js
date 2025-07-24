// ==UserScript==
// @name         Xenforo Redgifs Clicker
// @version      1.1
// @description  Load all redgifs on the current thread page
// @author       NTFSvolume
// @match        https://*.simpcity.cr/watched/threads*
// @grant        GM_xmlhttpRequest
// @run-at       document-idle   // Wait until the page is fully loaded
// ==/UserScript==

(function () {
  'use strict';

  function simulateClicks() {
    const elements = document.querySelectorAll(
      'div[onclick*="loadMedia"][onclick*="redgifs"]'
    );

    elements.forEach((element) => {
      element.click();
    });
  }

  setTimeout(simulateClicks, 1000);

})();
