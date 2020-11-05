import Vue, { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createGameStore } from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faArrowLeft, faArrowRight, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { state } from '@/store/reactive-service-approach';

library.add(faUserSecret, faArrowLeft, faArrowRight, faArrowUp, faArrowDown);

// custom builder to pass initial props
const store = createGameStore(5, 7);
setInterval(async () => {
  await store.commit('randomPosition');
}, 500);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(store)
  .mount('#app');
console.log('app created', app);
