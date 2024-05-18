class Session extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {

        let src = this.getAttribute("src")

        this.innerHTML = `
        <div class="modal-session">
            <div class="container-modal">
                <div class="container-modal-session">
                    <div>
                        <img src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-session" alt="">
                    </div>
                    <div class="container-info-sesion">
                        <div class="container-icon-close-sesion">
                            <img src="${src}close.svg" class="icon-close-sesion" alt="">
                        </div>
                        <div>
                            <p class="titulo-rg-sn">comienza:)</p>
                            <p class="p-sn-rg">inicia/registra con el username y la contraseña.</p>
                        </div>
                        <div class="container-inputs-sesion">
                            <input class="input-sesion" placeholder="username" type="text">
                            <input class="input-sesion" placeholder="contraseña" type="text">
                        </div>
                        <button class="btn-sesion">INGRESA</button>
                    </div>
                </div>
            </div>
        </div>
            `;
    }

}

window.customElements.define("session-component", Session)