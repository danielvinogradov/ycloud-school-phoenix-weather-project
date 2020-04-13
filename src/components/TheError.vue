<template lang="pug">
	section(class="error" v-if="hasErrors")
		p(class="error__text") Что-то пошло не так. #[span(v-if="returnResponseStatusCode") Код ошибки - {{returnResponseStatusCode}}.] #[span(v-if="returnErrorText") Текст ошибки: {{returnErrorText}}]
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "TheError",
        computed: mapGetters([
            "hasErrors",
            "returnResponseStatusCode",
            "returnErrorText"
        ])
    }
</script>

<style lang="less" scoped>
	.error {
		max-width: 50%;
		.center();
		margin: 50px auto;
	}

	.error__text {
		text-align: center;
		color: red;
	}
</style>
