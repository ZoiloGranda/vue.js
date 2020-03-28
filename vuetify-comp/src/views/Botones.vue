<template lang="html">
 <v-container>
  <v-row>
   <v-col><v-btn>Texto</v-btn></v-col>
   <v-col><v-btn color="primary">Texto</v-btn></v-col>
   <v-col><v-btn dark color="blue">Texto</v-btn></v-col>
   <v-col><v-btn color="secondary" text>Sin Fondo</v-btn></v-col>
   <v-col><v-btn color="warning" large>Largo</v-btn></v-col>
   <v-col><v-btn color="warning" small>Pequeño</v-btn></v-col>
  </v-row>
  <v-row>
    <v-col><v-btn color="warning" large disabled>Disabled</v-btn></v-col>
    <v-col><v-btn color="info" depressed>Depressed</v-btn></v-col>
    <v-col><v-btn><v-icon>favorite</v-icon></v-btn></v-col>
    <v-col><v-btn color="primary" icon text><v-icon>forum</v-icon></v-btn></v-col>
    <v-col><v-btn color="primary" fab><v-icon>forum</v-icon></v-btn></v-col>
    <v-col><v-btn color="primary" fab small><v-icon>forum</v-icon></v-btn> </v-col>
  </v-row>
  <v-row>
    <v-col><v-btn color="primary" fab large><v-icon>forum</v-icon></v-btn></v-col>
    <v-col><v-btn color="success">Texto<v-icon>forum</v-icon></v-btn></v-col>
    <v-col><v-btn color="success">Texto<v-icon class="ml-2">forum</v-icon></v-btn></v-col>
    <v-col><v-btn color="success">Texto<v-icon right>forum</v-icon></v-btn></v-col>
    <v-col><v-btn color="success"><v-icon left>forum</v-icon>Texto</v-btn></v-col>
    <v-col><v-btn color="success" outlined><v-icon left>forum</v-icon>Texto</v-btn></v-col>
  </v-row>
  <v-row>
  <v-col><v-btn color="success" outlined block><v-icon left>forum</v-icon>Texto</v-btn></v-col>
 </v-row>
 </v-container>
</template>

<script>
export default {
 name: 'Botones'
}
</script>

<style lang="css" scoped>
</style>
