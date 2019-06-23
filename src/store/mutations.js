import * as types from './mutation-types'

export default {
    [types.AUTH_LOGIN](state, payload) {
        throw new Error('AUTH_LOGIN mutaition should be implemented')
    },

    [types.FETCH_ALL_TASKLIST](state, payload) {
        throw new Error('FETCH_ALL_TASKLIST mutaition should be implemented')
    },

    [types.ADD_TASK](state, payload) {
        throw new Error('ADD_TASK mutaition should be implemented')
    },

    [types.UPDATE_TASK](state, payload) {
        throw new Error('UPDATE_TASK mutaition should be implemented')
    },

    [types.REMOVE_TASK](state, payload) {
        throw new Error('REMOVE_TASK mutaition should be implemented')
    },

    [types.AUTH_LOGOUT](state, payload) {
        throw new Error('AUTH_LOGOUT mutaition should be implemented')
    },
}
