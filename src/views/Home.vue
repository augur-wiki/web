<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <TestStreamer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TestStreamer from "@/components/home/TestStreamer.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    TestStreamer
  }
};
</script>
