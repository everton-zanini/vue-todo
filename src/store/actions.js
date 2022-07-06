import db from '@/services/localbase.js'

export default {
    async adicionaTarefa({ commit }, titulo) {
        await commit('adicionaTarefa', titulo)
        await commit('buscarTarefas')
    },
    async editaTarefa({ commit }, novaTarefa) {
        await db.collection('tarefas').doc({ id: novaTarefa.id }).update({
            titulo: novaTarefa.titulo
        }).then(() => {
            commit('buscarTarefas')
        })
    },
    async concluiTarefa({ commit }, novaTarefa) {
        await db.collection('tarefas').doc({ id: novaTarefa.id }).update({
            concluido: !novaTarefa.concluido
        }).then(() => {
            commit('buscarTarefas')
        })
    },
    async removeTarefa({ commit }, id) {
        await db.collection('tarefas').doc({ id }).delete().then(() => {
            commit('buscarTarefas')
        })
    }
}