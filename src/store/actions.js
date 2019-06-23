import * as types from './mutation-types'
import { Auth, List, Task } from '../api'

export default {
    login: ({ commit }, authInfo) => {
        throw new Error('login action should be implemented')
    },

    fetchLists: ({ commit, state }) => {
        throw new Error('fetchLists action should be implemented')
    },

    addTask: ({ commit, state }, { listId, name }) => {
        throw new Error('addTask action should be implemented')
    },

    updateTask: ({ commit, state }, task) => {
        throw new Error('updateTask action should be implemented')
    },

    removeTask: ({ commit, state }, { id, listId }) => {
        throw new Error('removeTask action should be implemented')
    },

    logout: ({ commit, state }) => {
        throw new Error('logout action should be implemented')
    }
}
