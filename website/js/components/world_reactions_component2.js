fetch("./html/worldwide-reactions2.html")
    .then(stream => stream.text())
    .then(text => define2(text));


function define2(html) {

    class WorlwideReactions extends HTMLElement {
        constructor() {
            super();

            var shadow = this.attachShadow({mode: 'open'});
            shadow.innerHTML = html;
        }
    }

    customElements.define('worldwide-reactions2', WorlwideReactions);

}
