<template>
<div class="Panel">
    <h1>Fooberry the game!</h1>
    <div class="toolbar">
        <div class="toolbar-buttons">
          <button><font-awesome-icon icon="arrow-left" /></button>
            &nbsp;
          <button><font-awesome-icon icon="arrow-up" /></button>
            &nbsp;
          <button><font-awesome-icon icon="arrow-down" /></button>
            &nbsp;
          <button><font-awesome-icon icon="arrow-right" /></button>
        </div>
    </div>
    <Board :rows="rows" :cols="cols" />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


import Board from '../components/game/Board.vue';
//eslint-disable-next-line no-unused-vars
import { useStore } from 'vuex';

const Game = defineComponent({
   props: {
        rows: {
            type: Number,
            required: true
        },
        cols: {
            type: Number,
            required: true
        }
    },
    setup() {
      const store = useStore();
        onkeydown = (ev) => {
          console.log(`Key down: ${ev.key}`);
          switch(ev.key) {
            case 'w':
              store.dispatch('moveNorth');
              break;
            case 'a':
              store.dispatch('moveWest');
              break;
            case 's':
              store.dispatch('moveSouth');
              break;
            case 'd':
              store.dispatch('moveEast');
              break;
            default:
              console.log('.');
          }
        }
    },
    components: {
        Board
    },

});
export default Game;
</script>

<style>
div.p-toolbar-group-left {
    width: 100%;
}

div.toolbar-buttons {
    text-align: center;
    width: 100%;
}

div.p-toolbar-group-right {
    width: 0 !important;
}

div.toolbar-buttons {
  text-align: center;
  padding: 10px;

}

div.toolbar-buttons button {
  width: 3em;
  height: 2em;
  padding: 1px;
  margin: 1px;
  background-color: white;
  color: black;
}
</style>
