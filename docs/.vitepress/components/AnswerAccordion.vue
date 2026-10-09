<template>
    <div class="answer-accordion">
        <button class="accordion-toggle" @click="isOpen = !isOpen" :aria-expanded="isOpen">
            <span class="icon">{{ isOpen ? '−' : '+' }}</span>
            <span>{{ isOpen ? 'Tutup' : 'Buka' }} jawaban</span>
        </button>
        <div v-show="isOpen" class="accordion-body">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    open: { type: Boolean, default: false },
})

const isOpen = ref(props.open)
</script>

<style scoped>
.answer-accordion {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    margin-bottom: 24px;
    overflow: hidden;
}
.accordion-toggle {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: #f8fafc;
    border: none;
    cursor: pointer;
    text-align: left;
    font-size: 0.9em;
    color: #64748b;
    user-select: none;
}
.accordion-toggle:hover {
    background: #f1f5f9;
}
.icon {
    font-size: 1.1em;
    font-weight: 700;
}
.accordion-body {
    padding: 16px 20px;
}
.accordion-body img {
    max-width: 100%;
    border-radius: 6px;
}
</style>
