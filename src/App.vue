<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="runWorker">Run worker</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TestWorker from "./test.worker";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    runWorker() {
      const worker = TestWorker();

      worker.addEventListener("message", (event) => {
        console.log("Worker returned", event.data);
      });
      worker.addEventListener("error", (error) => {
        console.log("Error in worker:", error);
      });
      worker.postMessage("Message from main should be returned to main");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
