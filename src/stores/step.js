import {computed, ref} from 'vue'
import {defineStore} from 'pinia'

export const useStepStore = defineStore('step', () => {
    const steps = [{id: 1, name: 'Username'}, {id: 2, name: 'Email'}, {id: 3, name: 'Review'},]
    const step = ref(1)
    const stepText = computed(() => `Step: ${steps.find(s => s.id === step.value).name}`)

    function increment() {
        if (step.value < 3) {
            step.value++
        }
    }

    function decrement() {
        if (step.value > 1) {
            step.value--

        }
    }

    return {step, stepText, increment, decrement}
})
