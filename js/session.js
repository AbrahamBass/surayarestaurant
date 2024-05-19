class Session extends HTMLElement {
    constructor() {
        super();
        this.closeModal = this.closeModal.bind(this);
    }

    connectedCallback() {

        let src = this.getAttribute("src")

        const user = localStorage.getItem('user');

        if(!user){
            this.innerHTML = `
                <div id="modal" class="modal-session">
                    <div class="container-modal">
                        <div class="container-modal-session">
                            <div>
                                <img src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-session" alt="">
                            </div>
                            <div class="container-info-sesion">
                                <div class="container-icon-close-sesion">
                                    <img src="${src}/close.svg" class="icon-close-sesion" id="closeIcon">
                                </div>
                                <div>
                                    <p class="titulo-rg-sn">comienza:)</p>
                                    <p class="p-sn-rg">inicia/registra con el username y la contraseña.</p>
                                </div>
                                <div class="container-inputs-sesion">
                                    <input id="username" class="input-sesion" placeholder="username" type="text">
                                    <input id="password" class="input-sesion" placeholder="contraseña" type="text">
                                </div>
                                <button id="loginButton" class="btn-sesion">INGRESA</button>
                            </div>
                        </div>
                    </div>
                </div>
                    `;
                    const loginButton = this.querySelector("#loginButton");
                    loginButton.addEventListener("click", this.handleLogin);
        }else{
            this.innerHTML = `
                <div id="modal" class="modal-session">
                    <div class="container-modal">
                        <div class="container-modal-session">
                            <div>
                                <img src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-session" alt="">
                            </div>
                            <div class="container-info-sesion">
                                <div class="container-icon-close-sesion">
                                    <img src="${src}/close.svg" class="icon-close-sesion" id="closeIcon">
                                </div>
                                <h1 class="titulo-name-account">Hola, ${user}</h1>
                                <button id="logoutButton" class="btn-sesion">CERRAR SESION</button>
                            </div>
                        </div>
                    </div>
                </div>
                    `;

                const logoutButton = document.querySelector("#logoutButton");
                logoutButton.addEventListener("click", this.logout);
                
        }

        
        const closeIcon = this.querySelector("#closeIcon");
        closeIcon.addEventListener("click", this.closeModal);



    }

    closeModal() {
        const sessionModal = document.getElementById("modal");
        sessionModal.style.display = "none"
    }

    handleLogin() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);

        
        if (username && password) {
            localStorage.setItem('user', username); 
            localStorage.setItem('bag', '[]')
            alert('Inicio de sesión exitoso');
            location.reload(); 
        } else {
            alert('Por favor, ingresa un username y una contraseña');
        }
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('bag') 
        alert('Sesión cerrada');
        location.reload(); 
    }

}

window.customElements.define("session-component", Session)