<template>
    <button
        class="button-basic" 
        :class="this.class, this.type"
    >
        <slot></slot>
    </button>
</template>

<script>

export default{
    props:{
        type: {
            type: String,
            default: "one"
        },
        class: {
            type: String,
            default: null
        }
    }
}

</script>

<style lang="scss" scoped>

.button-basic{
    outline: none;
    border: none;

    &.one{
        background: var(--color-brand-two);

        &.ghost{
            background: none;
            border: 1px solid var(--color-brand-two);
        }
    }

    &.two{
        background: none;
        border: 2px solid var(--color-brand-two);
    }

    &.three{
        background: var(--color-brand-one);
    }

}

</style>