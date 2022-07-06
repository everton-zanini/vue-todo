<template>
  <div>
    <v-list flat subheader >
      <v-list-item-group >
        <div v-for="(tarefa, index) in $store.state.tarefas" :key="index">
          <Tarefa :tarefa="tarefa" />
        </div>
      </v-list-item-group>
    </v-list>
    <div class="mt-16 animate__bounceIn" v-if="!$store.state.tarefas.length">
      <center>
        <v-icon size="100" color="primary">mdi-check</v-icon>
        <div
          class="text-h5 primary--text"
        >
          Nenhuma tarefa
        </div>
      </center>
    </div>
  </div>
</template>

<script>
import Tarefa from "../components/Tarefa";

export default {
  name: "Home",
  components: {
    Tarefa,
  },
  created() {
    this.$store.commit("buscarTarefas");
  },
};
</script>
