import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        server: {
            host: 'http://api.openweathermap.org/data/2.5/weather',
            token: 'ea37b0aa5f7e9cdb25b7d0d0787c5a89',
        },

        weatherData: null,

        responseStatusCode: null,

        errorText: null,
    },

    getters: {
        hasWeatherData: state => {
            return !!state.weatherData && state.weatherData.cod === 200
        },

        returnWeatherData: state => {
            return state.weatherData
        },

        returnResponseStatusCode: state => {
            return state.responseStatusCode
        },

        returnErrorText: state => {
            return state.errorText
        },

        hasErrors: state => {
            return !!state.errorText || (state.responseStatusCode !== 200 && !!state.responseStatusCode)
        }
    },

    mutations: {
        updateWeatherData: function (state, serverData) {
            state.weatherData = serverData
        },

        updateResponseStatusCode: function (state, code) {
            state.responseStatusCode = code
        },

        updateErrorText: function (state, text) {
            state.errorText = text
        },

        resetErrors: function (state) {
            state.errorText = null;
            state.responseStatusCode = null
        },

        resetWeatherData: function (state) {
            state.weatherData = null
        }
    },

    actions: {
        fetchWeatherData: async function (ctx, city) {
            ctx.commit('resetErrors');
            ctx.commit('resetWeatherData');

            if (city.length < 2) {
                ctx.commit('updateErrorText', 'Необходимо ввести город (длина названия не может быть меньше 2 букв).')
                return
            }

            await fetch(`${ctx.state.server.host}?q=${city}&units=metric&lang=ru&APPID=${ctx.state.server.token}`, {
                method: "GET",
            })
                .then(res => res.json())
                .then(res => {
                    ctx.commit('updateWeatherData', res)
                    ctx.commit('updateResponseStatusCode', res.cod)
                })
                .catch(e => ctx.commit('updateErrorText', `${e.name} ${e.message}`))
        },

        resetAllData: function (ctx) {
            ctx.commit('resetErrors');
            ctx.commit('resetWeatherData');
        }
    }
})
