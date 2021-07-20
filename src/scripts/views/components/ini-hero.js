/* eslint-disable no-underscore-dangle */
class IniHero extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
            <div class="hero">
                <div class="hero-overlay">
                    <div class="hero-inner">
                        <h1 class="hero-title">Indonesia Menu</h1>
                        <p class="hero-tag">Rasa Nusantara</p>
                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define('ini-hero', IniHero);
