<template>

    <div class="configuration-wrapper h-full p-lg bg-gradient-brand-two">
    </div>

</template>

<script>

import { useNavigationStore } from '@/stores/navigation.js'

export default{
    created(){
        useNavigationStore().setTitle(this.$route.query.title);
    }
}

</script>

<style lang="scss" scoped>

.configuration-wrapper{
    padding-top: 70px;
}

</style>