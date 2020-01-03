<template>
  <v-content>
    <v-container fluid>
      <v-card>
        <v-card-title class="blue lighten-2">
          Create card
        </v-card-title>
        <v-col class="blue lighten-5" id="createACard">
          <v-row class="mx-2">
            <v-col class="align-center justify-space-between" cols="12">
              <v-row align="center" class="mr-0">
                <v-avatar size="40px" class="mx-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
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
              <v-text-field
                placeholder="Link to a card image"
                label="Card image"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-card-actions>
          <v-btn text color="primary">Cancel</v-btn>
          <v-btn text>Save</v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    dialog: true
  })
};
</script>

<style>
.v-content#createACard {
  padding-bottom: 210px;
}
</style>
