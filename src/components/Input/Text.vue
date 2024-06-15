<template>
    <div 
        class="input-text-component flex flex-column gap-sm"
        :class="this.class, type"
    >
        <p v-if="title">{{ title }}</p>
        <input 
            class="w-full h-full font-sm"
            :value="value"
            v-uppercase
            :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script>

export default{
    props: {
        type: {
            type: String,
            default: "one"
        },
        class: {
            type: String,
            default: null
        },
        value: {
            type: String || Number,
            default: null
        },
        placeholder: {
            type: String,
            default: null,
        },
        title: {
            type: String,
            default: null
        }
    }
}

</script>

<style lang="scss" scoped>

.input-text-component{

    &.one{
        
        input{
            border: 1px solid var(--color-brand-two);
            border-radius: var(--scale-brand-md);
            outline: none;
            padding: var(--scale-brand-lg);
        }
        
    }

}

</style>