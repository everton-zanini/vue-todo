<template>
  <div>
    <v-col cols="12">
      <v-text-field
        v-model="inputTarefa"
        label="Qual a sua tarefa?"
        @keyup.enter="handleTarefa"
        outlined
        clearable
      ></v-text-field>
    </v-col>

    <v-list flat subheader>
      <v-list-item-group multiple active-class="">
        <div v-for="(tarefa, index) in $store.state.tarefas" :key="index">
          <Tarefa :tarefa="tarefa" />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Tarefa from "../components/Tarefa";

export default {
  name: "Home",
  components: {
    Tarefa,
  },
  data() {
    return {
      inputTarefa: "",
    };
  },
  methods: {
    handleTarefa() {
        this.$store.dispatch('adicionaTarefa',this.inputTarefa);
        this.inputTarefa = null;
      
    },
  },
  created(){
    this.$store.commit('buscarTarefas')
  }
};
</script>
