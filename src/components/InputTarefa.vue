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
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputTarefa: "",
    };
  },
  methods: {
    handleTarefa() {
      this.$store.dispatch("adicionaTarefa", this.inputTarefa);
      this.inputTarefa = null;
    },
  },
};
</script>

<style>
</style>