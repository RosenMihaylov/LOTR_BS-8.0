<template>
  <div id="register">
    <h1>This is a register page</h1>
    <input
      type="text"
      name="userName"
      placeholder="Username"
      v-model="userName"
      required
    />
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
    <input
      type="password"
      name="passwrodRetpeat"
      placeholder="Confirm your Password"
      v-model="passwordRepeat"
      required
    />
    <br />
    <button @click="register">Register</button>
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
    async register() {
      if (
        !this.userName ||
        !this.email ||
        !this.passwordRepeat ||
        !this.passwordRepeat
      ) {
        return alert(
          "Please fill all the fields correctly if you want to register"
        );
      } else if (this.password === this.passwordRepeat) {
        const response = await AuthenticationService.register({
          userName: this.userName,
          email: this.email,
          password: this.password
        });
        console.log(response.data);
        this.userName = "";
        this.email = "";
        this.password = "";
        this.passwordRepeat = "";
        return;
      } else {
        alert(
          "Please repeat your password correctly in the confirmation field"
        );
      }
    }
  }
};
</script>

<style lang="scss"></style>
