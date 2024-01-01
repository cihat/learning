const template = document.createElement('template');
template.innerHTML = `
  <style>
    h3 {
      color: coral;
    }
  </style>
  <div class="user-card">
    <img />
    <div>
      <h3></h3>
      <p><slot name="email"/></p>
      <p><slot name="phone"/></p>
    </div>
    <button id="toggle-info">Hide Info</button>
  </div>
`
class UserCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src= this.getAttribute('avatar');
  }

  toggleInfo() {
    console.log(222)
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo())
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').removeEventListener();
    
  }
}

customElements.define('user-card', UserCard);
