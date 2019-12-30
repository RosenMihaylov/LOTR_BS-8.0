<template>
  <div id="register">
    <h1>This is a login page</h1>
    <input
      type="text"
      name="userName"
      placeholder="Username"
      v-model="userName"
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
    <button @click="login">lLogin</button>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService.js";
export default {
  name: "Register",
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      passwordRepeat: ""
    };
  },
  methods: {
    async login() {}
  }
};
</script>

<style lang="scss"></style>
