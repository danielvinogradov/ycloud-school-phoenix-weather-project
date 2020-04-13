<template lang="pug">
	header(class="header")
		h1(class="header__name") Smart Weather App
		p(class="header__desc") Получите информацию о текущей погоде в вашем городе.
</template>

<script>
    export default {
        name: "TheLogo"
    }
</script>

<style lang="less" scoped>
	.header {
		padding: 25px 0 100px;
	}

	.header__name {
		.reset();
		margin-bottom: 15px;

		.font(40px, normal, 400, #000);
		text-align: center;
	}

	.header__desc {
		.reset();

		text-align: center;
	}
</style>
