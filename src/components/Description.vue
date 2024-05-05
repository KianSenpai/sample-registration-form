<template>
    <div>
        <input id="description" v-model="text" @input="handleInput"/>
        <div>{{ message }}</div>
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
            const map = { '(': ')', '[': ']', '{': '}' }

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
            return this.debounce(this.isBalanced, 500);
        },
    }
}
</script>
