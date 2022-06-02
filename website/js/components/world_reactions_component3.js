fetch("./html/worldwide-reactions3.html")
    .then(stream => stream.text())
    .then(text => define3(text));


function define3(html) {

    class WorlwideReactions extends HTMLElement {
        constructor() {
            super();

            var shadow = this.attachShadow({mode: 'open'});
            shadow.innerHTML = html;
        }
    }

    customElements.define('worldwide-reactions3', WorlwideReactions);

}
