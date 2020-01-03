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
      <v-spacer />
      <v-btn to="/register" class="smallCircle" v-if="!isLoggedIn">
        <v-icon text>mdi-account-plus-outline</v-icon>
      </v-btn>
      <v-btn to="/login" class="smallCircle" v-if="!isLoggedIn">
        <v-icon text>mdi-login</v-icon>
      </v-btn>
      <v-btn class="smallCircle" v-if="isLoggedIn" @click="logout" to="/">
        <v-icon text>mdi-logout</v-icon>
      </v-btn>
      <v-btn
        to="https://www.facebook.com/ravensvt"
        target="_blank"
        class="smallCircle"
      >
        <v-icon text>mdi-facebook</v-icon>
      </v-btn>
    </v-app-bar>
    <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="grey darken-2">
          Create card
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col class="align-center justify-space-between" cols="12">
              <v-row align="center" class="mr-0">
                <v-avatar size="40px" class="mx-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  />
                </v-avatar>
                <v-text-field placeholder="Card Name" label="CARD NAME" />
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="business"
                placeholder="Card Type"
                label="CARD TYPE"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field placeholder="Card Sub-Type" label="CARD SUB-TYPE" />
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="business"
                placeholder="Race"
                label="RACE"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field placeholder="Title" label="TITLE" />
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="STRENGHT"
                type="number"
                placeholder="Strenght"
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="VITALITY"
                type="number"
                placeholder="VITALITY"
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="TWILIGHT"
                type="number"
                placeholder="TWILIGHT"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Active skill during Fellowship phase"
                label="Active skill during Fellowship phase"
                text-lowercase
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Passive skill during Fellowship phase"
                label="Passive skill during Fellowship phase"
                text-lowercase
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Active skill during Shadow phase"
                label="Active skill during Shadow phase"
                text-lowercase
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Passive skill during Shadow phase"
                label="Passive skill during Shadow phase"
                text-lowercase
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Active skill during Maneuver phase"
                label="Active skill during Maneuver phase"
                text-lowercase
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Passive skill during Maneuver phase"
                label="Passive skill during Maneuver phase"
                text-lowercase
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Active skill during Archery phase"
                label="Active skill during Archery phase"
                text-lowercase
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Passive skill during Archery phase"
                label="Passive skill during Archery phase"
                text-lowercase
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Active skill during Battle phase"
                label="Active skill during Battle phase"
                text-lowercase
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Passive skill during Battle phase"
                label="Passive skill during Battle phase"
                text-lowercase
              />
            </v-col>
            <v-col cols="12">
              <v-file-input label="Card image" accept="image/*"></v-file-input>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
          <v-spacer />
          <v-btn text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        icon: "mdi-cards-playing-outline",
        text: "Card list",
        link: ""
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
