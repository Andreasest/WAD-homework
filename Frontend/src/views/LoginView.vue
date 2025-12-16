<template>
  <section class="signup">
    <form class="signup-card" @submit.prevent="handleLogin">
      <div class="form-row">
        <label for="email">Email</label>
        <input
          id="email"
          v-model.trim="form.email"
          type="email"
          name="email"
          required
          autocomplete="email"
          placeholder="Email"
        />
      </div>
      <div class="form-row">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          name="password"
          required
          autocomplete="current-password"
          placeholder="Password"
        />
      </div>
      <button class="signup-button" type="submit" :disabled="loading">
        {{ loading ? "Signing in..." : "Login" }}
      </button>

      <p class="muted">
        Don't have an account?
        <router-link to="/signup">Create one</router-link>
      </p>
      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="success" class="success">{{ success }}</p>
    </form>
  </section>
</template>

<script>
import auth from "../auth";
export default {
  name: "LoginView",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      loading: false,
      error: null,
      success: null,
    };
  },
  async mounted() {
    // check if already logged in
    const isAuth = await auth.authenticated();
    if (isAuth) {
      await fetch("http://localhost:3000/auth/logout", {
        credentials: "include",
      });
      console.log("logged out");
    }
  },
  methods: {
    async handleLogin() {
      this.error = null;
      this.success = null;
      this.loading = true;
      try {
        const response = await fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(this.form),
        });

        const payload = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(payload.error || "Unable to login");
        }

        this.success = "Logged in! Redirecting to home...";
        setTimeout(() => this.$router.push("/"), 400);
      } catch (err) {
        this.error = err.message || "Login failed";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.signup {
  width: 100%;
  display: flex;
  justify-content: center;
}
.signup-card {
  background-color: #eae8e8;
  border-radius: 10px;
  padding: 20px;
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-row {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.form-row label {
  font-weight: 600;
}
.form-row input {
  border-radius: 6px;
  border: 1px solid #c7c7c7;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
}
.signup-button {
  display: block;
  margin: 0 auto;
  background: #2f5ea8;
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
}
.signup-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.signup-button:not(:disabled):hover {
  background-color: #1c3f7a;
}
.muted {
  color: #6b7280;
  margin: 0;
  text-align: center;
}
.error {
  color: #b91c1c;
  margin: 0;
}
.success {
  text-align: center;
  font-weight: 700;
  color: #2c7a36;
}
</style>
