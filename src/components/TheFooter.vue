<template lang="pug">
	footer
		p Smart Weather App
		p Мы используем #[a(href="https://openweathermap.org/") OpenWeather]
</template>

<script>
    export default {
        name: "TheFooter"
    }
</script>

<style lang="less" scoped>
	footer {
		padding: 25px 0;
		margin-top: auto;

		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
