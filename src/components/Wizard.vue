<script setup>
import {ref} from "vue"
import {useStepStore} from "../stores/step.js";

const store = useStepStore()
const username = ref('')
</script>

<template>
    <div class="bg-slate-100 border border-slate-200 rounded-xl flex flex-col overflow-hidden min-w-full sm:min-w-[420px]">
        <div
            class="px-4 py-2 border-b border-b-slate-200 border-r border-r-slate-200 rounded-br-xl w-fit font-semibold bg-slate-200">
            {{ store.stepText }}
        </div>
        <div class="p-4">
            <div class="mb-2">Username:</div>
            <input :value="username" @change="e => username = e.target.value"
                   id="username"
                   class="w-full rounded-md border border-slate-200 px-3 py-1">
            <div class="flex justify-between mt-8">
                <button class="px-3 py-1 bg-blue-600 hover:bg-blue-500 transition-all text-white rounded-md"
                        @click="store.decrement()">Previous Step
                </button>
                <button class="px-3 py-1 bg-blue-600 hover:bg-blue-500 transition-all text-white rounded-md"
                        @click="store.increment()">Next Step
                </button>
            </div>
        </div>
    </div>
</template>