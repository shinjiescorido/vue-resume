<template>
  <!-- /**
   * The root component of the application.
   * Renders the `ResumePage` component.
   */ -->
  <div id="app">
    <ResumePage />
  </div>
</template>

<script>
/**
 * Vue component representing the root application.
 */
import ResumePage from "@/views/ResumePage.vue";

export default {
  name: "App",
  components: {
    ResumePage,
  },
};
</script>

<style>
html {
  background: #000;
}

body {
  margin: 0px;
}

#app {
  background: #000;
}
</style>
