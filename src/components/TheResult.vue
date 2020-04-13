<template lang="pug">
	article(class="result")
		p(v-if="cityName && countryCode") Мы определили ваш город как #[span(class="bold") {{ cityName }}, {{ countryCode }}]
		p(v-if="weatherDesc") Сейчас на улице {{ weatherDesc }}.
		p(v-if="currentTemp") Текущая температура составляет {{ currentTemp }}&#8451;.
		p(v-if="feelsLike") Ощущается как {{ feelsLike }}.
		p(v-if="maxTemp && minTemp") Максимум составит {{ maxTemp }}&#8451;, а минимум &mdash; {{ minTemp }}&#8451;.
		p(v-if="currentHumidity") Текущая влажность - {{ currentHumidity }}%.
		p(v-if="currentWindSpeed") Ветер {{ currentWindSpeed }} м/сек.
</template>

<script>
    export default {
        name: "TheResult",
        props: {
            cityName: {
                type: String,
                default: null,
            },
            countryCode: {
                type: String,
                default: null,
            },
            weatherDesc: {
                type: String,
                default: null,
            },
            currentTemp: {
                type: Number,
                default: null,
            },
            feelsLike: {
                type: Number,
                default: null,
            },
            maxTemp: {
                type: Number,
                default: null,
            },
            minTemp: {
                type: Number,
                default: null,
            },
            currentHumidity: {
                type: Number,
                default: null,
            },
            currentWindSpeed: {
                type: Number,
                default: null,
            }
        }
    }
</script>

<style lang="less" scoped>
	.result {
		width: 50%;
		.center();
	}

	.bold {
		font-weight: 700;
	}
</style>
