"use strict";
let TYPEOUT_DEFAULT_INTERVAL = 100;
let TYPEOUT_INTERVAL_ATTR = "data-typeout-interval";
function typeOut(elem, interval) {
    let content = elem.textContent;
    elem.textContent = "";
    function updateFunc() {
        let firstChar = content.charAt(0);
        content = content.substring(1);
        elem.textContent += firstChar;
        if (content.length != 0) {
            setTimeout(updateFunc, interval);
        }
    }
    setTimeout(updateFunc, interval);
}
// On Page Loaded
(() => {
    let typeOutContent = document.getElementsByClassName("typeout");
    for (let i = 0; i < typeOutContent.length; i++) {
        let elem = typeOutContent[i];
        let interval = TYPEOUT_DEFAULT_INTERVAL;
        if (elem.hasAttribute(TYPEOUT_INTERVAL_ATTR)) {
            interval = Number(elem.getAttribute(TYPEOUT_INTERVAL_ATTR));
        }
        typeOut(elem, interval);
    }
})();
//# sourceMappingURL=main.js.map