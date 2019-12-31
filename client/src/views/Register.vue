<template>
  <div id="register">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Register form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="email"
                    name="email"
                    prepend-icon="person"
                    type="email"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
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
  props: {
    source: String
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
  background: #fff;
  color: #fff;
}
</style>
