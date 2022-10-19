<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    {{ login.nickname }}
    <HelloWorld msg="Vite + Vue" />
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import useStore from '@/store';

const { login } = useStore();
console.log(login.nickname);

</script>

<style lang="scss" scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
