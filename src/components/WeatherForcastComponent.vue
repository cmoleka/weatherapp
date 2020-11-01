<template>
    <v-row>
        <v-card class="mx-auto" max-width="592" width="592">
            <v-simple-table>
                <template v-slot:default>
                    <tbody>
                        <forecast-weather-row
                            v-for="(data, index) in forcastData"
                            :key="index"
                            :day="data.dt_txt"
                            :icon="data.weather[0].icon"
                            :temp="data.main.temp"
                            :forecast="data.weather[0].description"
                        />
                    </tbody>
                </template>
            </v-simple-table>
        </v-card>
    </v-row>
</template>

<script>
import ForecastWeatherRow from '@/components/ForcastWeatherRow.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
    components: {
        ForecastWeatherRow
    },
    computed: {
        ...mapGetters('weatherModule', {
            forcastData: 'getWeatherForecastData',
            weatherUnit: 'getActiveUnit'
        })
    }
}
</script>
