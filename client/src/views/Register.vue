<template>
  <div id="register">
    <h1>This is a register page</h1>
    <br />
    <input
      type="email"
      name="email"
      placeholder="email"
      v-model="email"
      required
    />
    <br />
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="password"
      required
    />
    <br />
    <div v-html="error" class="error" />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService.js";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async register() {
      if (!this.email || !this.password) {
        return alert(
          "Please fill all the fields correctly if you want to register"
        );
      } else {
        try {
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
          });
          console.log(response.data);
          alert(
            `Congratulations! You have registered with email: ${this.email}`
          );
          this.email = "";
          this.password = "";
          this.error = "";

          return;
        } catch (error) {
          this.error = error.response.data.error;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>
