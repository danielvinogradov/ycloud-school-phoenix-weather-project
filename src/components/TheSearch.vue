<template lang="pug">
	form(class="search" @submit.prevent="getWeatherData")
		input(
			class="search__input"
			v-model="cityName"
			placeholder="Введите ваш город"
			ref="cityInput"
		)
		button(
			class="search__button"
		) Подсказать
		button(
			class="search__reset"
			type="reset"
			@click="resetInfo"
		) X
</template>

<script>
    export default {
        name: "TheSearch",
        data() {
            return {
                cityName: null,
            }
        },
        methods: {
            getWeatherData: function () {
                this.$store.dispatch("fetchWeatherData", this.cityName)
            },

            resetInfo: function () {
                this.$store.dispatch("resetAllData")
                this.$refs.cityInput.focus()
            }
        },
    }
</script>

<style lang="less" scoped>
	.search {
		width: 100%;

		display: flex;
		justify-content: center;
	}

	.search__input {
		width: 40%;
		margin-right: 1%;
		padding: 10px;

		border-radius: 3px;

		.font(16px, normal, 400, #000);
	}

	.search__button {
		width: 15%;
		margin-right: 1%;

		background-color: #000;
		border: none;
		border-radius: 3px;

		.font(16px, normal, 400, #fff);
	}

	.search__reset {
		width: 3%;

		background-color: #000;
		border: none;
		border-radius: 3px;

		.font(16px, normal, 400, #fff);
	}
</style>
