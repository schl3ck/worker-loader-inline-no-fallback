self.addEventListener("message", (event) => {
  console.log("Hello from Worker! Main send me:", event.data);
  self.postMessage(event.data);
});
