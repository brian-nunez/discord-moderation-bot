class BotState {
  constructor() {
    this.state = {
      disabled: false,
    };
  }

  enable() {
    this.state.disabled = false;
  }

  disable() {
    this.state.disabled = true;
  }

  isDisabled() {
    return this.state.disabled;
  }
}

export default new BotState();
