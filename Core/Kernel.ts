import { EventEmitter } from "events";

class Web4Kernel {
  private static instance: Web4Kernel;
  public events: EventEmitter;
  private plugins: Map<string, any>;

  private constructor() {
    this.events = new EventEmitter();
    this.plugins = new Map();
  }

  static getInstance() {
    if (!Web4Kernel.instance) {
      Web4Kernel.instance = new Web4Kernel();
    }
    return Web4Kernel.instance;
  }

  registerPlugin(name: string, plugin: any) {
    this.plugins.set(name, plugin);
    plugin?.init?.(this);
  }

  getPlugin(name: string) {
    return this.plugins.get(name);
  }

  emit(event: string, data?: any) {
    this.events.emit(event, data);
  }

  on(event: string, handler: Function) {
    this.events.on(event, handler);
  }
}

export const kernel = Web4Kernel.getInstance();
