<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Apagar </v-card-title>
        <v-card-text>Tem certeza que deseja apagar a tarefa?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('fechaModal')">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="handleApaga">
            Apagar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    props:['tarefa'],
  data() {
    return {
      dialog: true,
    };
  },
  methods:{
    handleApaga(){
        this.$store.dispatch('removeTarefa',this.tarefa.id);
        this.$emit('fechaModal');
    }
  }
};
</script>

<style>
</style>