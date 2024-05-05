<script setup>
import {RouterView} from 'vue-router'
import AppContainer from "@/components/AppContainer.vue";
</script>

<template>
    <div class="flex min-h-screen w-full justify-center bg-slate-50">
        <AppContainer>
            <RouterView/>
        </AppContainer>
    </div>
</template>

<style scoped>

</style>
