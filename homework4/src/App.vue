<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/contacts">Contacts</router-link>
    <router-link to="/login">Login</router-link>
  </nav>
  <div class="content">
    <router-view />
  </div>
  <footer class="footer">
    <p>© Copyright</p>
  </footer>
</template>

<style>
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: center;
  padding: 30px;
  gap: 1em;
  background-color: darkgray;
  border-radius: 7px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #002aff96;
}
.content {
  position: absolute;
  top: 78px;
  bottom: 40px;
  left: 0;
  right: 0;
  overflow-y: auto;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: darkgray;
  border-radius: 7px;
  padding: 0.5em;
  flex-shrink: 0;
}
.footer p {
  margin: 0;
  font-weight: 600;
}
</style>
