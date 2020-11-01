<template>
    <tr class="forcast">
        <td class="forcast--icon"><v-img :src="weatherIcon" width="60" /></td>
        <td class="forcast--day">{{ moment(day).format('ddd') }}</td>
        <td class="forcast--temp">
            {{ parseInt(temp) + '&deg;' + getActiveUnit.symbol }}
        </td>
        <td class="forcast--day">{{ forecast }}</td>
    </tr>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        day: {
            type: String,
            default: '--'
        },
        icon: {
            type: String,
            default: '--'
        },
        temp: {
            type: Number,
            default: 0
        },
        forecast: {
            type: String,
            default: '--'
        }
    },
    computed: {
        ...mapGetters('weatherModule', ['getActiveUnit']),
        weatherIcon() {
            return `https://openweathermap.org/img/w/${this.icon}.png`
        }
    }
}
</script>
