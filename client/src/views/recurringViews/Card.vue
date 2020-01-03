<template>
  <v-col cols="12">
    <v-card class="elevation-12">
      <v-toolbar color="cyan" flat>
        <v-toolbar-title
          >{{ cardInfo.name }} - {{ cardInfo.title }}</v-toolbar-title
        >
        <v-spacer />
      </v-toolbar>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col
            cols="4"
            class="cardImage"
            flex
            align="center"
            justify="center"
          >
            <img
              :src="cardInfo.img"
              :alt="cardInfo.name"
              :title="cardInfo.name + ' ' + cardInfo.title"
            />
          </v-col>
          <v-col cols="8">
            <ul class="no-dots">
              <li v-if="cardInfo.cardType">
                Card Type: {{ cardInfo.cardType }}
              </li>
              <li v-if="cardInfo.cardSubType">
                Card Sub Type: {{ cardInfo.cardSubType }}
              </li>
              <li v-if="cardInfo.race">Race: {{ cardInfo.race }}</li>
              <li v-if="cardInfo.title">Title: {{ cardInfo.title }}</li>
              <li v-if="cardInfo.strenght">
                Card strenght: {{ cardInfo.strenght }}
              </li>
              <li v-if="cardInfo.vitality">
                Card vitality: {{ cardInfo.vitality }}
              </li>
              <li v-if="cardInfo.twilight">
                Card twilight cost: {{ cardInfo.twilight }}
              </li>
              <li v-if="cardInfo.activeFellowshipPhaseSkill">
                Active Fellowship Phase Skill:
                {{ cardInfo.activeFellowshipPhaseSkill }}
              </li>
              <li v-if="cardInfo.passiveFellowshipPhaseSkill">
                Passive Fellowship Phase Skill:
                {{ cardInfo.passiveFellowshipPhaseSkill }}
              </li>
              <li v-if="cardInfo.activeShadowPhaseSkill">
                Active Shadow Phase Skill:
                {{ cardInfo.activeShadowPhaseSkill }}
              </li>
              <li v-if="cardInfo.passiveShadowPhaseSkill">
                Passive Shadow Phase Skill:
                {{ cardInfo.passiveShadowPhaseSkill }}
              </li>
              <li v-if="cardInfo.activeManeuverPhaseSkill">
                Active Maneuver Phase Skill:
                {{ cardInfo.activeManeuverPhaseSkill }}
              </li>
              <li v-if="cardInfo.passiveManeuverPhaseSkill">
                Passive Maneuver Phase Skill:
                {{ cardInfo.passiveManeuverPhaseSkill }}
              </li>
              <li v-if="cardInfo.activeArcheryPhaseSkill">
                Active Archery Phase Skill:
                {{ cardInfo.activeArcheryPhaseSkill }}
              </li>
              <li v-if="cardInfo.passiveArcheryPhaseSkill">
                Passive Archery Phase Skill:
                {{ cardInfo.passiveArcheryPhaseSkill }}
              </li>
              <li v-if="cardInfo.activeBattlePhaseSkill">
                Active Battle Phase Skill:
                {{ cardInfo.activeBattlePhaseSkill }}
              </li>
              <li v-if="cardInfo.passiveBattlePhaseSkill">
                Passive Battle Phase Skill:
                {{ cardInfo.passiveBattlePhaseSkill }}
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
      <slot class="place to add buttons"></slot>
    </v-card>
  </v-col>
</template>

<script>
import cardInfo from "../CardList.vue";
export default {
  data: () => ({
    cardInfo: cardInfo
  })
};
</script>

<style lang="scss">
img {
  max-width: 100%;
  max-height: 300px;
}
</style>
