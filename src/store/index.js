import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    integrantes:[
      {nombre: 'Deidara', edad:18,poder: 'Arcilla Magica'},
      {nombre: 'Itachi', edad:25,poder:'MangekioSharingan'},
      {nombre: 'Sasori', edad:16, poder: 'Marionetas'},
      {nombre: 'kisame', edad:27,poder: 'Espada del Poto'},
      {nombre: 'Pain', edad:21,poder:'7 Caminos'},
      {nombre: 'Obito', edad:30, poder: 'Susano'}
    ]
  },
  mutations: {
      aumentar(state,index){
        state.integrantes[index].edad ++
      },
      reiniciar (state){
        state.integrantes.forEach(el =>{
          el.edad = 0
        })
      }
  },
  actions: {
  },
  modules: {
  }
})
