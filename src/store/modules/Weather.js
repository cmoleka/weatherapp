/* eslint-disable no-shadow */
import { WeatherApi } from '@/services/WeatherService'
/* Weather module */

// state object
const state = {
    currentWeatherData: {},
    weatherForecastData: {},
    userLocation: '',
    units: [
        { name: 'metric', symbol: 'C', speed: 'Kmh', active: true },
        { name: 'imperial', symbol: 'F', speed: 'Mph', active: false }
    ],
    error: false,
    dataIsLoaded: false
}

// Getters
const getters = {
    getActiveUnit(state) {
        return state.units.filter(unit => unit.active)[0]
    },
    getCurrentWeatherData(state) {
        return state.currentWeatherData
    },
    getWeatherForecastData(state) {
        if (state.weatherForecastData.list) {
            return state.weatherForecastData.list.filter(
                item => item.dt_txt.slice(11) == '12:00:00'
            )
        }
    },
    getWeatherStateError(state) {
        return state.error
    },
    getDataIsLoaded(state) {
        return state.dataIsLoaded
    }
}
// Mutations
const mutations = {
    setUserLocation(state, location) {
        state.userLocation = location
    },
    setActiveUnit(state, unitName) {
        state.units.forEach(item =>
            item.name !== unitName ? (item.active = false) : (item.active = true)
        )
    },
    setCurrentWeatherData(state, data) {
        state.currentWeatherData = data
    },
    setWeatherForecastData(state, data) {
        state.weatherForecastData = data
    },
    setError(state, value) {
        state.error = value
    },
    setDataIsLoaded(state, value) {
        state.dataIsLoaded = value
    }
}

// Actions
const actions = {
    async fetchWeatherData({ commit, state, getters }, requestType) {
        try {
            const weatherData = await WeatherApi(
                {
                    location: state.userLocation,
                    unit: getters.getActiveUnit.name
                },
                requestType
            )
            weatherData.cod == 200 && requestType !== 'forecast'
                ? commit('setCurrentWeatherData', weatherData)
                : weatherData.cod == 200 && requestType == 'forecast'
                ? commit('setWeatherForecastData', weatherData)
                : commit('setError', true)
            state.currentWeatherData && state.weatherForecastData
                ? commit('setDataIsLoaded', true) && commit('setError', false)
                : commit('setDataIsLoaded', false) && commit('setError', true)
        } catch (e) {
            throw e
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
