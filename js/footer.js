class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let src = this.getAttribute("src");

    this.innerHTML = `
        <footer class="container-footer">
            <div class="container-icons-social-footer">
                <img src="${src}/facebook.svg" alt="img" class="icons-footer">
                <img src="${src}/youtube.svg" alt="img" class="icons-footer">
                <img src="${src}/instagram.svg" alt="img" class="icons-footer">
                <img src="${src}/twitter.svg" alt="img" class="icons-footer">
                <img src="${src}/tiktok.svg" alt="img" class="icons-footer">
            </div>
            <div>
                <img src="${src}/delivero.svg" alt="img" class="icons-footer">
            </div>
        </footer>
            `;
  }
}

window.customElements.define("footer-component", Footer);
