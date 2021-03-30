class BotState {
  constructor() {
    this.state = {
      disabled: false,
      warn: [],
      allowDevelopers: false,
    };
  }

  add(type, data = {}) {
    this.state[type].push({
      time: new Date(),
      ...data,
    });
  }

  remove(type, memberID) {
    const originalLength = this.state[type].length;
    const copy = [...this.state[type]].filter(member => memberID !== member.memberID);
    this.state[type] = copy;
    return originalLength - copy.length;
  }

  getLogs(type) {
    return this.state[type];
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

  setAllowDevelopers(bool) {
    this.state.allowDevelopers = bool;
  }

  getAllowDevelopers() {
    return this.state.allowDevelopers;
  }
}

export default new BotState();
