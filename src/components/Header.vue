<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/signup">Sign up</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  padding: 0.5em;
  background-color: darkgray;
  border-radius: 7px;
  position: sticky;
  top: 0;
}

.header .nav {
  display: flex;
  gap: 10px;
}

.nav > a {
  padding: 10px 15px;
  text-decoration: none;
  text-align: center;
  display: block;
  color: black;
  font-size: 0.99em;
}

.nav a:hover {
  background-color: #7ebeb6;
  border-radius: 5px;
  color: white;
}
</style>
