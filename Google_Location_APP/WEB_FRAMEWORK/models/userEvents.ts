// Setting a type alias as a type of argument that is
// a function with no arguments returns nothing
type CallBack = () => void;

export class UserEvents {
  // Property to store all the events that the events might trigger
  // since we don't really know what event might trigger the events
  // this is the correct syntax to handle an object with all the properties
  // like click: true, bubbles: true
  events: { [key: string]: CallBack[] } = {};

  public on = (eventName: string, callback: CallBack): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };
  public trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    // Loop through each callback passed
    handlers.forEach(callback => {
      // forEach callback just call it or execute it
      callback();
    });
  };
}
