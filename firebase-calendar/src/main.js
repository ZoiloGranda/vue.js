import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';
import 'firebase/firestore';

import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false;

const firebaseConfig = {
	apiKey: "AIzaSyBE2tukUqleBfvT2dPQUb3YEiTtXG56dzo",
	authDomain: "vue-calendario-ab74c.firebaseapp.com",
	databaseURL: "https://vue-calendario-ab74c.firebaseio.com",
	projectId: "vue-calendario-ab74c",
	storageBucket: "vue-calendario-ab74c.appspot.com",
	messagingSenderId: "398001747004",
	appId: "1:398001747004:web:a3a0e818087c9243997f39"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')