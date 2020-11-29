<template>
  <img :src="imgSrc" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

//eslint-disable-next-line no-unused-vars
import { useStore } from "vuex";

export default defineComponent({
  setup(props) {
    const store = useStore();
    const imgSrc = computed(() => {
      return store.getters.calcTile(props.row, props.col);
    });
    return {
      imgSrc,
    };
  },
  props: {
    row: {
      type: Number,
      required: true,
    },
    col: {
      type: Number,
      required: true,
    },
    contents: [],
  },
});
</script>

<style scoped></style>
