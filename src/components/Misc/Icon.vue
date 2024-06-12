<template>
    <div 
        class="misc-icon"
        :style="{ 
            width: `${this.size[0]}px`, 
            height: `${this.size[1]}px`,
            maskImage: `url(${module})`,
            background: color
        }"
    >
    </div>
</template>

<script>

export default {
    data() {
        return {
            module: null,
        }
    },
    props:{
        icon: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: "#FFFFFF"
        },
        size: {
            type: Array,
            default: () => [16, 16]
        }
    },
    created() {
		this.getIcon().then(({ default: icon }) => {
			this.module = icon
		})
	},
	methods: {
		async getIcon() {
			return await import(`/svg/${this.icon}.svg`)
		}
	}
}

</script>

<style scoped>

.misc-icon{
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
}

</style>