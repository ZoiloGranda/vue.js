const app = new Vue({
  el:'#app',
  data:{
    titulo: 'Hola mundo con vue',
    frutas: [
      {nombre:'manzana',cantidad: 10},
      {nombre:'pera',cantidad: 0},
      {nombre:'platano',cantidad: 11}
    ]
  }
});