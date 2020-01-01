<template>
  <div id="register" class="component">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="cyan" flat>
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
                    v-model="email"
                    required
                  />
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                    required
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div v-html="error" class="error" />
                <v-spacer />
                <v-btn color="cyan" @click="register">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
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

<style lang="scss">
$view-height: calc(100% - 80px);

#register {
  height: 100%;
  .v-container,
  .v-content {
    height: 100%;
  }
}
.error {
  background: #fff;
  color: #fff;
}
</style>
