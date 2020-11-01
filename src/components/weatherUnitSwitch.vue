<template>
    <v-row style="mx-auto my-1">
        <v-col>
            <label>Select unit:</label>
            <v-chip
                v-for="(unit, index) in units"
                link
                :key="index"
                class="mx-2"
                :color="getActiveUnit.name == unit.value ? 'blue' : ''"
                :outlined="getActiveUnit.name !== unit.value ? true : false"
                @click="setUnitAndData(unit.value)"
            >
                {{ unit.name }}
            </v-chip>
        </v-col>
    </v-row>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            units: [
                { name: 'C', value: 'metric' },
                { name: 'F', value: 'imperial' }
            ]
        }
    },
    computed: {
        ...mapGetters('weatherModule', ['getActiveUnit'])
    },
    methods: {
        ...mapMutations('weatherModule', ['setActiveUnit']),
        ...mapActions('weatherModule', ['fetchWeatherData']),
        setUnitAndData(unit) {
            this.setActiveUnit(unit)
            this.fetchWeatherData()
            this.fetchWeatherData('forecast')
        }
    }
}
</script>
