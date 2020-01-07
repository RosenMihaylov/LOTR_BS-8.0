<template>
  <div id="cardList">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="flex-start" justify="center">
          <v-col cols="12">
            <h2>
              CardList
              <v-btn>
                <v-icon @click="toggleAllCards"
                  >mdi-format-list-bulleted-type</v-icon
                >
              </v-btn>
            </h2>
          </v-col>
          <v-col cols="12" sm="8" md="6">
            <h3>
              Champions of Good / Companions
              <v-btn @click="toggleCompanions">
                <v-icon>mdi-eye-outline</v-icon>
              </v-btn>
            </h3>
            <ol v-if="companionList">
              <li v-for="companion in companionCards" :key="companion.index">
                <Card class="card"> </Card>
              </li>
            </ol>
            <h3>
              Items for Companions
              <v-btn @click="toggleCompanionItemList">
                <v-icon>mdi-eye-outline</v-icon>
              </v-btn>
            </h3>
            <ol v-if="companionItemList">
              <li
                v-for="companionItem in companionItemCards"
                :key="companionItem.index"
              >
                <Card> </Card>
              </li>
            </ol>
          </v-col>
          <v-col cols="12" sm="8" md="6">
            <h3>
              Champions of Evil / Minions
              <v-btn @click="toggleMinions">
                <v-icon>mdi-eye-outline</v-icon>
              </v-btn>
            </h3>
            <ol v-if="minionList">
              <li v-for="minion in minionCards" :key="minion.index">
                <Card> </Card>
              </li>
            </ol>
            <h3>
              Items for Minions
              <v-btn @click="toggleMinionItemList">
                <v-icon>mdi-eye-outline</v-icon>
              </v-btn>
            </h3>
            <ol v-if="minionItemList">
              <li v-for="minionItem in minionItemCards" :key="minionItem.index">
                <Card> </Card>
              </li>
            </ol>
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
      isUserAdmin: false,
      companionCards: [1],
      minionCards: [1],
      companionItemCards: [1],
      minionItemCards: [2],
      companionList: true,
      minionList: false,
      companionItemList: false,
      minionItemList: false
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
    },
    toggleAllCards() {
      if (
        this.companionList === false ||
        this.minionList === false ||
        this.companionItemList === false ||
        this.minionItemList === false
      ) {
        this.companionList = true;
        this.minionList = true;
        this.companionItemList = true;
        this.minionItemList = true;
        return;
      } else {
        this.companionList = false;
        this.minionList = false;
        this.companionItemList = false;
        this.minionItemList = false;
      }
    },
    toggleCompanions() {
      if (this.companionList === false) {
        this.companionList = true;
        return;
      } else {
        this.companionList = false;
      }
    },
    toggleCompanionItemList() {
      if (this.companionItemList === false) {
        this.companionItemList = true;
        return;
      } else {
        this.companionItemList = false;
      }
    },
    toggleMinions() {
      if (this.minionList === false) {
        this.minionList = true;
        return;
      } else {
        this.minionList = false;
      }
    },
    toggleMinionItemList() {
      if (this.minionItemList === false) {
        this.minionItemList = true;
        return;
      } else {
        this.minionItemList = false;
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
