<template>
  <div id="navigation">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item :key="item.text" link :to="item.link">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 350px" class="ml-0 pl-4">
        <v-icon>mdi-cards-playing-outline</v-icon> <v-spacer></v-spacer>
        <span class="hidden-sm-and-down">LOTR TCG BS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span v-if="isLoggedIn">{{ activeUser }}</span>
      </v-toolbar-title>
      <v-btn
        to="/register"
        class="smallCircle"
        v-if="!isLoggedIn"
        title="register"
      >
        <v-icon text>mdi-account-plus-outline</v-icon>
      </v-btn>
      <v-btn to="/login" class="smallCircle" v-if="!isLoggedIn" title="login">
        <v-icon text>mdi-login</v-icon>
      </v-btn>
      <v-btn
        class="smallCircle"
        v-if="isLoggedIn"
        @click="logout"
        to="/"
        title="logout"
      >
        <v-icon text>mdi-logout</v-icon>
      </v-btn>
      <a href="https://www.facebook.com/ravensvt" target="_blank" id="facebook">
        <v-btn link class="smallCircle">
          <v-icon text>mdi-facebook</v-icon>
        </v-btn>
      </a>
    </v-app-bar>
    <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
      to="/createACard"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    source: String
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    activeUser() {
      return this.$store.getters.user;
    }
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      {
        icon: "mdi-home",
        text: "Home",
        link: "/"
      },
      {
        icon: "mdi-cards-playing-outline",
        text: "Card list",
        link: "/cardList"
      },
      {
        icon: "mdi-play",
        text: "Tutorial",
        link: ""
      }
    ]
  }),
  methods: {
    navigateTo(route) {
      this.$router.push.route;
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss">
#facebook {
  color: #fff;
  border-bottom: 0;
  text-decoration: none;
}
.v-btn {
  margin-left: 5px;
  display: inline-block;
  &.smallCircle {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    padding: 0;
  }
}
</style>
