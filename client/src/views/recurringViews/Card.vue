<template>
  <v-col cols="12">
    <v-card class="elevation-12">
      <v-toolbar color="cyan" flat>
        <v-toolbar-title>Card Name</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="4">
            image
          </v-col>
          <v-col cols="8">Info</v-col>
        </v-row>
      </v-container>
      <slot class="place to add buttons"></slot>
    </v-card>
  </v-col>
</template>

<script>
export default {};
</script>

<style></style>
