<template>
    <v-row>
        <v-card class="mx-auto">
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title class="headline">
                        {{ getCurrentWeatherData.name }}, {{ getCurrentWeatherData.sys.country }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{ moment(Date.now()).format('dddd MMM Do YYYY') }}
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-card-text>
                <v-row align="center" justify="center">
                    <v-col class="display-3" cols="auto">
                        {{
                            parseInt(getCurrentWeatherData.main.temp) +
                                '&deg;' +
                                getActiveUnit.symbol
                        }}
                    </v-col>
                    <v-col align="center" cols="auto">
                        <v-img :src="weatherIcon" width="60" />
                        <p class="font-weight-bold">
                            {{ getCurrentWeatherData.weather[0].description }}
                        </p>
                    </v-col>
                </v-row>
                <v-row align="center" justify="center">
                    <v-col align="center" cols="auto">
                        <weather-unit-switch />
                    </v-col>
                </v-row>
            </v-card-text>
            <v-divider />
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-icon medium>mdi-thermometer</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <p class="mb-0">Feels like</p>
                                <strong>{{
                                    parseInt(getCurrentWeatherData.main.feels_like) +
                                        '&deg;' +
                                        getActiveUnit.symbol
                                }}</strong>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                    <v-divider vertical />
                    <v-col>
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-icon medium>mdi-water-percent</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <p class="mb-0">Humidity</p>
                                <strong>{{ getCurrentWeatherData.main.humidity + '%' }}</strong>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                    <v-divider vertical />
                    <v-col>
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-icon medium>mdi-weather-windy</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <p class="mb-0">Wind</p>
                                <strong>{{
                                    getCurrentWeatherData.wind.speed + ' ' + getActiveUnit.speed
                                }}</strong>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </v-row>
                <v-row> </v-row>
            </v-card-text>
        </v-card>
    </v-row>
</template>
<script>
import { mapGetters } from 'vuex'
import WeatherUnitSwitch from '@/components/weatherUnitSwitch.vue'

export default {
    components: {
        WeatherUnitSwitch
    },
    computed: {
        ...mapGetters('weatherModule', [
            'getActiveUnit',
            'getCurrentWeatherData',
            'getWeatherStateError'
        ]),
        weatherIcon() {
            return `https://openweathermap.org/img/w/${this.getCurrentWeatherData.weather[0].icon}.png`
        }
    }
}
</script>
