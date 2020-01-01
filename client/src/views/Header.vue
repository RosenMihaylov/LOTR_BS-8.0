<template>
  <div id="navigation">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item v-for="(child, i) in item.children" :key="i" link>
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" link :to="item.link">
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
      <v-spacer />
      <v-btn icon>
        <a
          href="https://www.facebook.com/ravensvt"
          id="facebook"
          target="_blank"
        >
          <v-icon>mdi-facebook</v-icon>
        </a>
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
export default {
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: "mdi-home", text: "Home", link: "/" },
      { icon: "mdi-login", text: "Login", link: "/login" },
      { icon: "mdi-account-card-details", text: "Your Account", link: "" },
      { icon: "mdi-account-plus-outline", text: "Register", link: "/Register" },
      { icon: "mdi-cards-playing-outline", text: "Card list", link: "" },
      { icon: "mdi-account-group", text: "User list", link: "" }
    ]
  })
};
</script>

<style lang="scss">
#facebook {
  color: #fff;
  border-bottom: 0;
  text-decoration: none;
}
</style>
