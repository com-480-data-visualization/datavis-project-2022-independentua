fetch("./html/worldwide-reactions.html")
    .then(stream => stream.text())
    .then(text => define(text));


function define(html) {

    class WorlwideReactions extends HTMLElement {
        constructor() {
            super();

            var shadow = this.attachShadow({mode: 'open'});
            shadow.innerHTML = html;
        }
    }

    customElements.define('worldwide-reactions', WorlwideReactions);

}
