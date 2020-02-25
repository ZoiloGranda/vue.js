Vue.component('saludo',{
 template:
 `
 <div>
 <h1>{{saludo}}</h1>
 <h1>algun texto</h1>
 </div>
 `,
 data() {
  return {
   saludo:'hola componente'
  }
 }
})

