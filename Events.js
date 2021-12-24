const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// customEmitter.emit("response");   //first listen then emit

customEmitter.on("response", (name, id) => {
  console.log(`data received ${name} with ${id}`);
});

customEmitter.on("response", (name) => {
  console.log(`something else ${name}`);
});

customEmitter.on("response", () => {
  console.log(`we can emit many functions`);
});

customEmitter.emit("response", "john", 34);
