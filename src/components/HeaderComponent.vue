<script setup>

import {useStepStore} from "@/stores/step.js";

const store = useStepStore()
</script>

<template>
    <div class="absolute w-full pb-4 border-b border-slate-200 font-semibold">{{ store.stepText }}</div>
</template>

<style scoped>

</style>