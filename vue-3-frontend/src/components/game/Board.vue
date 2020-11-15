<template>
  <div
    class="board"
    :style="{
      color: 'green',
      layout: 'grid',
      'grid-template-columns': 'repeat(' + cols + ', 1fr)',
    }"
  >
    <Cell
      v-for="colIndex in rawCols"
      :key="colIndex"
      :row="Math.ceil(colIndex / cols)"
      :col="Math.floor((colIndex - 1) % cols) + 1"
    />
  </div>
</template>

<script lang="ts">
import Cell from "./Cell.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Cell,
  },
  computed: {
    rawCols(): any {
      return this.$props.rows * this.$props.cols;
    },
    gridCss(): any {
      return {
        "--columns": "repeat(" + this.$props.cols + ", 1fr)",
      };
    },
  },
  props: {
    rows: {
      type: Number,
      default: 9,
    },
    cols: {
      type: Number,
      default: 9,
    },
  },
});
</script>

<style scoped>
div.board {
  display: grid;
  text-align: center;
  border: 10px solid red;
}
</style>
