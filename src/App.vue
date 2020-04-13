<template lang="pug">
	div(class="container" id="app")
		the-header
		the-search
		the-result(
			v-if="hasWeatherData"

			:city-name="returnWeatherData.name"
			:country-code="returnWeatherData.sys.country"
			:weather-desc="returnWeatherData.weather[0].description"
			:current-temp="returnWeatherData.main.temp"
			:feels-like="returnWeatherData.main.feels_like"
			:max-temp="returnWeatherData.main.temp_max"
			:min-temp="returnWeatherData.main.temp_min"
			:current-humidity="returnWeatherData.main.humidity"
			:current-wind-speed="returnWeatherData.wind.speed"
		)
		the-error
		the-footer
</template>

<script>
    import TheHeader from "@/components/TheHeader";
    import TheSearch from "@/components/TheSearch";
    import TheResult from "@/components/TheResult";
    import TheError from "@/components/TheError";
    import TheFooter from "@/components/TheFooter";

    import {mapGetters} from 'vuex';

    export default {
        name: 'App',
        components: {
            TheHeader,
            TheSearch,
            TheResult,
            TheError,
            TheFooter
        },

        computed: {
            ...mapGetters([
                "hasWeatherData",
                "returnWeatherData",
            ])
        }
    }
</script>

<style lang="less">
	#app {
		min-height: 100vh;

		display: flex;
		flex-direction: column;
	}
</style>
