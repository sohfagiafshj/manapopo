import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
Vue.config.productionTip = false
       // Your web app's Firebase configuration
       var firebaseConfig = {
         apiKey: "AIzaSyCnu-l7iv4io6pYo11gj69IndoRNfBfjNs",
         authDomain: "manapopo-82a1d.firebaseapp.com",
         databaseURL: "https://manapopo-82a1d.firebaseio.com",
         projectId: "manapopo-82a1d",
         storageBucket: "manapopo-82a1d.appspot.com",
         messagingSenderId: "1052135118424",
         appId: "1:1052135118424:web:2020e4537d4c298e"
       };
       // Initialize Firebase
       firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
