<template>
    <v-app>
        <v-btn href="https://github.com/cmoleka" absolute fab dark large color="primary">
            <v-icon large color="white">mdi-github</v-icon>
        </v-btn>
        <v-main class="home-container ">
            <v-container fill-height fluid>
                <router-view />
            </v-container>
        </v-main>
        <v-footer padless app>
            <v-row justify="center">
                <v-col class="text-center" cols="auto">
                    {{ footerContent.message }}
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'App',
    computed: {
        ...mapGetters({
            footerContent: 'getFooter'
        })
    }
}
</script>
<style lang="scss">
.home-container {
    background: url('https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
