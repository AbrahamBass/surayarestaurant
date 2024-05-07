class Header extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {

        let src = this.getAttribute("src")

        this.innerHTML = `
            <header class="container-header">
                <nav class="container-nav-header">
                   <div class="container-logo-header">
                        <img src="${src}/delivero.svg" alt="img" class="icons-footer">
                   </div>
                   <div class="container-icons-headers-settings">
                        <img src="${src}/person-circles.svg" alt="img" class="icons-footer">
                        <img src="${src}/cart.svg" alt="img" class="icons-footer">
                   </div>
                </nav>
             </header>
            `;
    }

}

window.customElements.define("header-component", Header)