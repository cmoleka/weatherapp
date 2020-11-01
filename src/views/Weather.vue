<template>
    <v-row align="center" justify="center">
        <v-col cols="auto" md="auto">
            <current-weather-component v-if="getDataIsLoaded" />
            <weather-search-component />
            <weather-forcast-component v-if="getDataIsLoaded" />
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import WeatherSearchComponent from '@/components/weatherSearch.vue'
import CurrentWeatherComponent from '@/components/CurrentWeatherComponent.vue'
import WeatherForcastComponent from '@/components/WeatherForcastComponent.vue'

export default {
    name: 'Weather',
    components: {
        CurrentWeatherComponent,
        WeatherForcastComponent,
        WeatherSearchComponent
    },
    computed: {
        ...mapGetters('weatherModule', ['getDataIsLoaded'])
    }
}
</script>
