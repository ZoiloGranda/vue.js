<template>
<v-app>
 <v-app-bar class="warning" app>
  <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  <v-toolbar-title>Vuetify</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn class="success">Ingreso</v-btn>
  <v-btn class="error">Salir</v-btn>
</v-app-bar>
 
 <v-navigation-drawer v-model="drawer" temporary dark app>
  <v-container mt-4>
   <v-row >
    <v-col justify="center" align="center">
     <v-avatar><img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png" alt=""></v-avatar>
    </v-col>
   </v-row>
   <v-row>
    <v-col justify="center" align="center">
     <p class="white--text mt-3 headline">Juanito Perez</p>
    </v-col>
   </v-row>
   <v-row mx-3>
    <v-col justify="center" align="center">
     <v-btn color="success" :to="{name: 'Home'}">Home</v-btn>
     <v-btn color="success" :to="{name: 'Tareas'}">Tareas</v-btn>
    </v-col>
   </v-row>
  </v-container>
 </v-navigation-drawer>
 
 <v-content>
  <router-view />
 </v-content>
</v-app>
</template>

<script>
export default {
 name: 'App',

 components: {},

 data: () => ({
  drawer: null
 }),
};
</script>
 