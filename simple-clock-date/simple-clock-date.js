class SimpleClockDate extends Polymer.Element {
  
  static get template() {
    return Polymer.html`
      <style>
        :host { cursor: default; }
        .content { padding: 15px 20px 15px; }
        .main { display: flex; width: 100%; justify-content: space-between; align-items: center; }
        .clockBox { font-size: 32px !important; font-family: var(--paper-font-headline_-_font-family); -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
          font-size: var(--paper-font-headline_-_font-size); font-weight: var(--paper-font-headline_-_font-weight); letter-spacing: var(--paper-font-headline_-_letter-spacing);
          line-height: var(--paper-font-headline_-_line-height); text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering); opacity: var(--dark-primary-opacity); }
        .dateBox {
          font-size: 20px !important; font-family: var(--paper-font-headline_-_font-family); -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
          font-size: var(--paper-font-headline_-_font-size); font-weight: var(--paper-font-headline_-_font-weight); letter-spacing: var(--paper-font-headline_-_letter-spacing);
          line-height: var(--paper-font-headline_-_line-height); text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering); opacity: var(--dark-primary-opacity); }
      </style>
      <ha-card><div class="content"><div class="main"><div class="clockBox"><div id="time"></div></div><div class="dateBox"><div id="date"></div></div></div></div></ha-card>`
  }
  
  static get properties() {
    return {
      _hass: {}
    }
  }

  set hass(hass) {
    this._hass = hass;
  }

  get hass() {
    return this._hass;
  }
  
  ready() {
    super.ready();
    this.time = this.$.time;
    this.date = this.$.date;
    
    this._updateTime();
    setInterval(() => this._updateTime(), 500);
  }
  
  setConfig(config) {
    this.config = config;
  }

  _updateTime() { 
    this.time.innerHTML = moment().format('HH:mm:ss');
    this.date.innerHTML = moment().format('DD.MM.YYYY');
  }

  getCardSize() {
    return 2;
  }
}

customElements.define('simple-clock-date', SimpleClockDate);