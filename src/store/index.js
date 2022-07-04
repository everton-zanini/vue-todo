import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas:[
      {id:0, titulo: "Ir ao mercado", concluido: false },
      {id:1, titulo: "Comprar pão", concluido: false },
      {id:2, titulo: "Levar Sufir no banho", concluido: false },
    ]
  },
  getters: {
  },
  mutations: {
    adicionaTarefa(state,titulo){
      if (titulo) {
        state.tarefas.push({
          id:new Date().getTime(),
          titulo,
          concluido: false,
        });
      }
    },
    removeTarefa(state,id){
      state.tarefas = state.tarefas.filter(tarefa=>tarefa.id !== id);
    }
  },
  actions: {
  },
  modules: {
  }
})
