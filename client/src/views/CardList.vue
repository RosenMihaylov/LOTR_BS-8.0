<template>
  <div id="cardList" class="component">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <h2>CardList</h2>
          </v-col>
          <v-col cols="12" sm="8" md="6">
            <h3>Champions of Good/Companions</h3>
            <Card>
              <slot>
                <v-card-actions>
                  <div v-html="error" class="error" />
                  <v-spacer />
                  <v-btn color="cyan" @click="login">Login</v-btn>
                </v-card-actions>
              </slot>
            </Card>
            <h3>Items for Companions</h3>
            <Card></Card>
          </v-col>
          <v-col cols="12" sm="8" md="6">
            <h3>Champions of Evil/Minions</h3>
            <Card></Card>
            <h3>Items for Minions</h3>
            <Card></Card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService.js";
import Card from "./recurringViews/Card.vue";
export default {
  components: { Card },
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
