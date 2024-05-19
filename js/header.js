class Header extends HTMLElement {
    constructor() {
        super();
        this.openSessionModal = this.openSessionModal.bind(this);
    }

    connectedCallback() {

        let src = this.getAttribute("src")
        let href = this.getAttribute("href")

        this.innerHTML = `
            <header class="container-header">
                <nav class="container-nav-header">
                   <div class="container-logo-header">
                        <img src="${src}/delivero.svg" alt="img" class="icons-footer">
                   </div>
                   <div class="container-icons-headers-settings">
                        <img src="${src}/person-circles.svg" alt="img" class="icons-footer" id="profileIcon">
                        <img src="${src}/cart.svg" alt="img" class="icons-footer" id="bolsa">
                   </div>
                </nav>
             </header>
            `;

        const profileIcon = this.querySelector("#profileIcon");
        profileIcon.addEventListener("click", this.openSessionModal);

        const bolsaIcon = document.getElementById("bolsa")
        bolsaIcon.addEventListener("click", () => {
            window.location.href = href
        })
    }

    openSessionModal() {
        const sessionModal = document.getElementById("modal");
        if (sessionModal) {
            sessionModal.style.display = "flex";
            sessionModal.style.justifyContent = "center"
            sessionModal.style.alignItems = "center"
        }
    }

}

window.customElements.define("header-component", Header)