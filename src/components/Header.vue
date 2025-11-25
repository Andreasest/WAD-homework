<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/signup">Signup</router-link>
    </nav>
    <div class="profile-menu">
      <img
        src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2558760599.jpg"
        alt="Profile"
        class="pfp"
      />
    </div>
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
  display: flex;
  align-items: center;
  gap: 1em;
  position: sticky;
  top: 0;
}
.header .nav {
  display: flex;
  gap: 10px;
}
.nav a {
  padding: 10px 15px;
  text-decoration: none;
  text-align: center;
  color: black;
  font-size: 0.99em;
  border-radius: 5px;
}
.nav a.router-link-active,
.nav a:hover {
  background-color: #7ebeb6;
  color: white;
}
.pfp {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: auto;
}
</style>
