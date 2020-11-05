<template>
<button @click="sendMessage">Do something toasty</button>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';

const component = defineComponent({
    methods: {
        sendMessage() {
            // this.$toast.add({
            //     severity: 'info',
            //     summary: 'Fun!',
            //     detail: 'no, really',
            //     life: 3000
            // });
        }
    }

});

export default component;
</script>
