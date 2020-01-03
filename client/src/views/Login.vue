<template>
  <div id="login" class="component">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="cyan" flat>
                <v-toolbar-title>Login form</v-toolbar-title>
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
                <v-btn color="cyan" @click="login">Login</v-btn>
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
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      isUserAdmin: false
    };
  },
  methods: {
    async login() {
      if (!this.email || !this.password) {
        return alert(
          "Please fill all the fields correctly if you want to login"
        );
      } else {
        try {
          if (this.email === "ravensvt4@abv.bg") {
            this.isUserAdmin === true;
          } else {
            this.isUserAdmin === false;
          }
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password,
            isUserAdmin: this.isUserAdmin
          });
          this.$store.dispatch("setToken", response.data.token);
          this.$store.dispatch("setUser", response.data.user.email);
          this.$router.push("/");
        } catch (error) {
          this.error = error.response.data.error;
        }
      }
    }
  }
};
</script>

<style lang="scss">
#login {
  height: calc(100% - 100px);
}
</style>
