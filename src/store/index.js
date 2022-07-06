import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      // { id: 0, titulo: "Ir ao mercado", concluido: false },
      // { id: 1, titulo: "Comprar pão", concluido: false },
      // { id: 2, titulo: "Levar Sufir no banho", concluido: false },
    ]
  },
  getters: {
  },
  mutations: {
    adicionaTarefa(state, titulo) {
      if (titulo) {
        db.collection('tarefas').add({
          id: new Date().getTime(),
          titulo,
          concluido: false,
        })
      }
    },
    removeTarefa(state, id) {
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id);
    },
    buscarTarefas(state){
      db.collection('tarefas').get().then(tarefasDB=>{
        state.tarefas = tarefasDB
      })
    }
  },
  actions: {
    async adicionaTarefa({commit}, titulo){
      await commit('adicionaTarefa', titulo)
      await commit('buscarTarefas')
    },
    async editaTarefa({commit}, novaTarefa){
      await db.collection('tarefas').doc({id:novaTarefa.id}).update({
        titulo: novaTarefa.titulo
      }).then(()=>{
        commit('buscarTarefas')
      })
    },
    async removeTarefa({commit},id){
      await db.collection('tarefas').doc({id}).delete().then(()=>{
        commit('buscarTarefas')
      })
    }
  },
  modules: {
  }
})
