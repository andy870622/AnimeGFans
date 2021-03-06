import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: null
	},
	mutations: {
		SET_USER_DATA(state, data) {
			state.user = data
			localStorage.setItem('user', JSON.stringify(data))
			axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
		}
	},
	actions: {
		login({ commit }, credentials) {
			return axios
				.post('https://192.168.0.149:3000/login', credentials)
				.then(({ data }) => {
					// console.log('user data is:', data)
					commit('SET_USER_DATA', data)
				})
        },
        login1({ commit }, credentials) {
			return axios
				.post('https://122.116.138.18:3000/login', credentials)
				.then(({ data }) => {
					// console.log('user data is:', data)
					commit('SET_USER_DATA', data)
				})
        },
        
	},
	getters: {
		loggedIn(state) {
			return !!state.user
		}
	}
})
