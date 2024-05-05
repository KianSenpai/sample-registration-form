<script setup>
import {ref} from "vue"

const step = ref('username')

const username = ref('')
const email = ref('')
const error = ref('')

function checkUsername(u) {
    if (u.length < 4 || u.length > 20 || /\W/.test(u)) {
        error.value = 'Invalid Username.'
    } else {
        step.value = 'email'
    }
}

function checkEmail(e) {
    const emailRegex =
        new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm")
    if (emailRegex.test(e)) {
        step.value = 'review'
    } else {
        error.value = 'Invalid email address.'
    }
}

function goNextStep() {
    error.value = ''
    switch (step.value) {
        case 'username':
            checkUsername(username.value)
            break
        case 'email':
            checkEmail(email.value)
            break
        default:
            break
    }
}

function goPrevStep() {
    error.value = ''
    switch (step.value) {
        case 'email':
            step.value = 'username'
            break
        case 'review':
            step.value = 'email'
            break
        default:
            break
    }
}
</script>

<template>
    <div
        class="bg-slate-100 border border-slate-200 rounded-xl flex flex-col overflow-hidden min-w-full sm:min-w-[420px]">
        <div
            class="px-4 py-2 border-b border-b-slate-200 border-r border-r-slate-200 rounded-br-xl w-fit font-semibold bg-slate-200">
            Step: {{ step }}
        </div>
        <div class="p-4">
            <div v-if="step === 'username'">
                <div class="mb-2">Username:</div>
                <input v-model="username"
                       id="username"
                       class="w-full rounded-md border border-slate-200 px-3 py-1">
            </div>
            <div v-else-if="step === 'email'">
                <div class="mb-2">Email:</div>
                <input v-model="email"
                       id="email"
                       class="w-full rounded-md border border-slate-200 px-3 py-1">
            </div>
            <div v-else>
                <div class="mb-2">Username: {{username}}</div>
                <div>Email: {{email}}</div>
            </div>
            <span>{{error}}</span>
            <div class="flex justify-between mt-8">
                <button class="px-3 py-1 bg-blue-600 hover:bg-blue-500 transition-all text-white rounded-md"
                        :class="step === 'username' && 'bg-slate-400 hover:bg-slate-400'"
                        @click="goPrevStep()" id="btn-prev" :disabled="step === 'username'">Previous Step
                </button>
                <button class="px-3 py-1 bg-blue-600 hover:bg-blue-500 transition-all text-white rounded-md"
                        :class="step === 'review' && 'bg-slate-400 hover:bg-slate-400'"
                        @click="goNextStep()" id="btn-next" :disabled="step === 'review'">Next Step
                </button>
            </div>
        </div>
    </div>
</template>