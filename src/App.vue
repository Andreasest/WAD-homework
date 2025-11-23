<template>
  <div id="app">
    <Header />
    <main class="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body,
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}
</style>
