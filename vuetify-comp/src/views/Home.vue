<template>
  <div class="home">
    <v-container>
     <v-layout wrap>
      <v-flex class="primary" xs12>
       <h1>12</h1>
      </v-flex>
      <v-flex class="secondary" xs6>
       <h1>6</h1>
      </v-flex>
      <v-flex class="error" xs6>
       <h1>6</h1>
      </v-flex>
     </v-layout>
     <v-layout class="secondary" mt-5 justify-center align-center style="height:300px">
      <v-flex class="info" xs3>
       <h1>Centrado</h1>
      </v-flex>
      <v-flex class="pink lighten-1 white--text" xs3>
       <h1>Centrado</h1>
      </v-flex>
     </v-layout>
     <v-layout>
      <v-flex>
       <h1 class="display-1 text-uppercase">Algun titulo</h1>
       <h1 class="display-2 pa-5 mt-5">Algun titulo</h1>
       <h1 class="display-3 text-center">Algun titulo</h1>
       <h1 class="display-4">Algun titulo</h1>
      </v-flex> 
     </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
   
  }
}
</script>
