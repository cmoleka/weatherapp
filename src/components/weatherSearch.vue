<template>
    <v-container>
        <v-row justify="center" class="my-2 mx-auto">
            <v-col cols="8" class="mr-0 pr-0">
                <v-text-field
                    v-model="location"
                    placeholder="Enter location: City, Country"
                    filled
                    color="light-blue"
                    background-color="white"
                    class="rounded-r-0"
                    required
                    no-gutters
                    :rules="rules"
                    hide-details="auto"
                ></v-text-field>
            </v-col>
            <v-col cols="auto" class="ml-0 pl-0" no-gutters>
                <v-btn
                    color="primary rounded-l-0"
                    elevation="2"
                    height="56px"
                    x-large
                    v-on:click="proceedToWeatherPage()"
                >
                    Submit
                </v-btn>
            </v-col>
        </v-row>
        <v-row justify="center" class="my-2 mx-auto">
            <v-chip class="ma-2" color="red" text-color="white" v-if="error">{{ error }}</v-chip>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'search-button',

    data() {
        return {
            location: '',
            error: '',
            rules: [
                value => !!value || 'Required.',
                value => (value && value.length >= 3) || 'Min 3 characters'
            ]
        }
    },
    watch: {
        location(val) {
            this.setUserLocation(val)
        }
    },
    computed: {
        ...mapGetters('weatherModule', ['getWeatherStateError', 'getActiveUnit'])
    },
    methods: {
        ...mapMutations('weatherModule', ['setUserLocation', 'setError']),
        ...mapActions('weatherModule', ['fetchWeatherData']),
        async proceedToWeatherPage() {
            try {
                this.setError(false)
                await this.fetchWeatherData()
                await this.fetchWeatherData('forecast')
                if (this.getWeatherStateError) {
                    this.error = 'City not found'
                }
                if (!this.getWeatherStateError && this.$route.name !== 'Weather') {
                    this.$router.push('/weather')
                }
            } catch (e) {
                this.error = e.message
            }
        }
    }
}
</script>
