<template>
    <v-row align="center" justify="center">
        <v-col md="auto" align="center">
            <h1 class="text-h1 white--text font-weight-bold">WeatherAPP</h1>
            <weather-search-component />
        </v-col>
    </v-row>
</template>

<script>
// @ is an alias to /src
import WeatherSearchComponent from '@/components/weatherSearch.vue'

export default {
    name: 'Home',
    components: {
        WeatherSearchComponent
    }
}
</script>
