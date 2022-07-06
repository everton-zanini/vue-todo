<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Editar </v-card-title>
        <v-card-text>Informe a nova descrição abaixo</v-card-text>
        <v-col cols="12">
          <v-text-field
            label="Qual a sua tarefa?"
            outlined
            v-model="titulo"
          ></v-text-field>
        </v-col>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('fechaModal')">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="handleEditar">
            Alterar
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
      titulo:null
    };
  },
  created(){
    this.titulo = this.tarefa.titulo
  },
  methods:{
    handleEditar(){
        let novaTarefa = {
            titulo: this.titulo,
            id: this.tarefa.id
        }
        this.$store.dispatch('editaTarefa',novaTarefa);
        this.$emit('fechaModal');
    }
  }
};
</script>

<style>
</style>