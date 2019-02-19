class GreetUser extends HTMLElement {
  static get observedAttributes() {
    return ['user'];
  }

  constructor() {
    super();
  }

  // When element inserted into DOM
  connectedCallback() {
    console.log('Custom element created');
    const user = this.getAttribute('user');

    // Shadow root
    var shadow = this.attachShadow({ mode: 'open' });

    // Root text element
    this.root = document.createElement('div');
    this.root.setAttribute('class', 'root');
    this.updateRootText(user);

    // CSS
    const style = document.createElement('style');
    style.textContent = `
      .root { 
        border: 1px solid #323232;
        padding: 5px 10px;
        background: #e2e2e2; 
        color: black;
        width: 400px;
        font-size: 2em;
        font-family: sans-serif;
      }
    `;
    shadow.appendChild(style);

    shadow.appendChild(this.root);
  }

  // When element removed from DOM
  disconnectedCallback() {
    console.log('Custom element destroyed');
  }

  // When element moved
  adoptedCallback() {
    console.log('Custom element moved');
  }

  // Called when attributes in `observedAttributes` are changed
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom element attributes have changed');
    console.log(`Attribute: ${name}  Old: ${oldValue}  New: ${newValue}`);

    if (this.root) {
      this.updateRootText(newValue);
    }
  }

  updateRootText(value) {
    this.root.innerHTML = `Welcome ${value}!!!`;
  }
}

customElements.define('greet-user', GreetUser);
