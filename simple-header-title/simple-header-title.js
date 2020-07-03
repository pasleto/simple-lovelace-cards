class SimpleHeaderTitle extends Polymer.Element {
  
  static get template() {
    return Polymer.html`
      <style>
        :host { cursor: default; }
        .content { padding: 10px 15px 10px; }
        .main { display: flex; width: 100%; justify-content: space-between; align-items: center; }
        .textBox { font-family: var(--paper-font-headline_-_font-family); -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
          font-size: var(--paper-font-headline_-_font-size); font-weight: var(--paper-font-headline_-_font-weight); letter-spacing: var(--paper-font-headline_-_letter-spacing);
          line-height: var(--paper-font-headline_-_line-height); text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering); opacity: var(--dark-primary-opacity); }
      </style>
      <ha-card><div class="content"><div class="main"><div class="textBox"><div id="text"></div></div></div></div></ha-card>`
  }
  
  static get properties() {
    return {
      _hass: {},
      config: {}
    }
  }

  set hass(hass) {
    this._hass = hass;
  }

  get hass() {
    return this._hass;
  }

  get title() {
    return this.config.title;
  }
  
  ready() {
    super.ready();
    this.text = this.$.text;
    this._passTextValue(this.title);
  }
  
  setConfig(config) {
    if (!config.title || config.title == '')
      throw new Error('Please specify title attribute (title: String).');

    this.config = config;
  }

  _passTextValue(value) { 
    this.text.innerHTML = value;
  }

  getCardSize() {
    return 2;
  }
}

customElements.define('simple-header-title', SimpleHeaderTitle);
