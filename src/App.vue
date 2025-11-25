<template>
  <div id="app">
    <div class="page-shell">
      <Header />
      <main class="main">
        <router-view />
      </main>
      <Footer />
    </div>
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
* {
  box-sizing: border-box;
  font-family: sans-serif;
}
body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
}
#app {
  flex: 1;
  display: flex;
  justify-content: center;
}
.page-shell {
  width: min(1000px, 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
