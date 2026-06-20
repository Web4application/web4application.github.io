class Web4Kernel {
  private events = new EventTarget();
  private state: Record<string, any> = {};
  private plugins: Record<string, any> = {};

  /* ---------------------------
   * EVENT SYSTEM (OS BUS)
   * --------------------------- */
  emit(event: string, data?: any) {
    this.events.dispatchEvent(new CustomEvent(event, { detail: data }));
  }

  on(event: string, handler: (e: any) => void) {
    this.events.addEventListener(event, handler as any);
  }

  /* ---------------------------
   * STATE SYSTEM (OS MEMORY)
   * --------------------------- */
  setState(key: string, value: any) {
    this.state[key] = value;
    this.emit("state:update", { key, value });
  }

  getState(key: string) {
    return this.state[key];
  }

  /* ---------------------------
   * PLUGIN SYSTEM (OS MODULES)
   * --------------------------- */
  registerPlugin(name: string, plugin: any) {
    this.plugins[name] = plugin;

    if (plugin?.init) {
      plugin.init(this);
    }

    this.emit("plugin:loaded", { name });
  }

  getPlugin(name: string) {
    return this.plugins[name];
  }

  /* ---------------------------
   * SYSTEM BOOT
   * --------------------------- */
  boot() {
    console.log("[Web4 Kernel] Booting system...");

    this.emit("system:boot");

    setTimeout(() => {
      this.emit("system:ready");
      console.log("[Web4 Kernel] System ready.");
    }, 500);
  }
}

export const kernel = new Web4Kernel();
