<template lang="html">
 <v-container grid-list-md>
  <v-row wrap>
   <v-col cols="6">
    <v-card>
     <v-img src="https://picsum.photos/300/200"></v-img>
     <v-card-title> <h2>Titulo</h2> </v-card-title>
     <v-card-text> <p>asldjaslkdj  q3809327 ashdashd saidhasd 2893d 2d2dj hkjhsakdh sa98d sadasdjsahd  73udiwdjkajsdasd y  jhjhkjh</p> </v-card-text>
     <v-card-actions><v-btn color="info" text @click="dialog=true">Accion</v-btn></v-card-actions>
    </v-card>
   </v-col>
   <v-col cols="6">
    <v-card>
     <v-img src="https://picsum.photos/300/200"></v-img>
    </v-card>
   </v-col>
  </v-row>
  
  <v-dialog v-model="dialog" width="500" persistent>
   <v-card>
    <v-card-title>Este es el titulo</v-card-title>
    <v-card-text> <p>asldjaslkdj  q3809327 ashdashd saidhasd 2893d 2d2dj hkjhsakdh sa98d sadasdjsahd  73udiwdjkajsdasd y  jhjhkjh</p> </v-card-text>
    <v-divider></v-divider>
    <v-card-actions><v-btn color="info" text @click="dialog=false">Cerrar</v-btn></v-card-actions>
   </v-card>
  </v-dialog>
 </v-container>
</template>

<script>
export default {
 name: 'Cards',
 data(){
  return {
   dialog: false
  }
 }
}
</script>

<style lang="css" scoped>
</style>
