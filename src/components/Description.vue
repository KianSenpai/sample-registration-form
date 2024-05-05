<template>
    <div
        class="p-4 bg-slate-100 border border-slate-200 rounded-xl flex flex-col overflow-hidden min-w-full sm:min-w-[420px]">
        <input id="description" v-model="text" @input="handleInput"
               class="w-full rounded-md border border-slate-200 px-3 py-1"/>
        <div class="mt-3 text-xs">{{ message }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: '',
            message: '',
        }
    },
    methods: {
        isBalanced() {
            const stack = []
            const map = {'(': ')', '[': ']', '{': '}'}

            for (let char of this.text) {
                if (char in map) {
                    stack.push(char)
                } else if (Object.values(map).includes(char)) {
                    const top = stack.pop()
                    if (!top || char !== map[top]) {
                        this.message = 'The text is not balanced.'
                        return
                    }
                }
            }

            if (stack.length === 0) {
                this.message = 'The text is balanced.'
            } else {
                this.message = 'The text is not balanced.'
            }
        },
        debounce(fn, delay) {
            let timeoutId
            return function (...args) {
                const context = this
                clearTimeout(timeoutId)
                timeoutId = setTimeout(() => {
                    fn.apply(context, args)
                }, delay);
            };
        },
        handleInput() {
            this.debouncedIsBalanced()
        },
    },
    computed: {
        debouncedIsBalanced() {
            return this.debounce(this.isBalanced, 500)
        },
    }
}
</script>
