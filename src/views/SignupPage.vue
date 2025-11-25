<template>
  <section class="signup">
    <form class="signup-card" @submit.prevent="handleSubmit">
      <div class="form-row">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <div class="form-row">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Password"
          required
        />
      </div>
      <button class="signup-button" type="submit">Signup</button>

      <div v-if="showIssues" class="error-panel">
        <strong>Password is not valid</strong>
        <ul>
          <li v-for="issue in passwordIssues" :key="issue">{{ issue }}</li>
        </ul>
      </div>
      <p v-if="showSuccess" class="success">All conditions satisfied!</p>
    </form>
  </section>
</template>

<script>
export default {
  name: "SignupView",
  data() {
    return {
      email: "",
      password: "",
      attemptedSubmit: false,
      success: false,
    };
  },
  computed: {
    passwordIssues() {
      const issues = [];
      const pwd = this.password;
      const lowercaseMatches = pwd.match(/[a-z]/g) || [];

      if (pwd.length < 8 || pwd.length > 14) {
        issues.push("Length must be between 8 and 14 characters.");
      }
      if (!/^[A-Z]/.test(pwd)) {
        issues.push("Must start with an uppercase letter.");
      }
      if (!/[A-Z]/.test(pwd)) {
        issues.push("Requires at least one uppercase letter.");
      }
      if (lowercaseMatches.length < 2) {
        issues.push("Requires at least two lowercase letters.");
      }
      if (!/\d/.test(pwd)) {
        issues.push("Requires at least one number.");
      }
      if (!pwd.includes("_")) {
        issues.push('Must include the "_" character.');
      }
      return issues;
    },
    passwordValid() {
      return this.password !== "" && this.passwordIssues.length === 0;
    },
    showIssues() {
      return this.password && (!this.passwordValid || this.attemptedSubmit);
    },
    showSuccess() {
      return this.success && this.passwordValid;
    },
  },
  methods: {
    handleSubmit() {
      this.attemptedSubmit = true;
      this.success = false;
      if (this.passwordValid) {
        this.attemptedSubmit = false;
        this.success = true;
        this.$router.push('/');
      }
    },
  },
};
</script>

<style>
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
.signup-button:hover {
  background-color: #1c3f7a;
}
.error-panel {
  background-color: #fff6f6;
  border: 1px solid #f0b8b8;
  border-radius: 8px;
  padding: 0.75rem 1rem;
}
.error-panel ul {
  padding-left: 1rem;
  margin: 0.35rem 0 0;
}
.success {
  text-align: center;
  font-weight: 700;
  color: #2c7a36;
}
</style>
