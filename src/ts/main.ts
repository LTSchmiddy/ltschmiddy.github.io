let TYPEOUT_DEFAULT_INTERVAL: number = 100;
let TYPEOUT_INTERVAL_ATTR = "data-typeout-interval";

function typeOut(elem: Element, interval: number) {
    let content: string = <string>elem.textContent;

    elem.textContent = "";

    function updateFunc() {
        let firstChar: string = content.charAt(0);
        content = content.substring(1);

        elem.textContent += firstChar;

        if(content.length != 0) {
            setTimeout(updateFunc, interval);
        }
    }

    setTimeout(updateFunc, interval);
}

// On Page Loaded
(()=>{
    let typeOutContent: HTMLCollectionOf<Element> = document.getElementsByClassName("typeout");

    for (let i: number = 0; i < typeOutContent.length; i++) {
        let elem: Element = typeOutContent[i];
        let interval: number = TYPEOUT_DEFAULT_INTERVAL;

        if (elem.hasAttribute(TYPEOUT_INTERVAL_ATTR)) {
            interval = Number(elem.getAttribute(TYPEOUT_INTERVAL_ATTR));
        }

        typeOut(elem, interval);
    }
})();