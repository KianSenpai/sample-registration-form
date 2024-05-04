import {computed, ref} from 'vue'
import {defineStore} from 'pinia'

export const useStepStore = defineStore('counter', () => {
    const steps = [{id: 1, name: 'Username'}, {id: 2, name: 'Email'}, {id: 2, name: 'Email'},]
    const step = ref(1)
    const stepText = computed(() => `Step: ${steps.find(s => s.id === step.value).name}`)

    function increment() {
        step.value++
    }

    function decrement() {
        step.value--
    }

    return {step, stepText, increment, decrement}
})
