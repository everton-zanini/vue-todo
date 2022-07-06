import db from "@/services/localbase";

export default {
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
    buscarTarefas(state) {
        db.collection('tarefas').get().then(tarefasDB => {
            state.tarefas = tarefasDB
        })
    }
}