import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router';
import store from './stores';
// Import the Auth0 configuration
//import { domain, clientId } from '../auth_config.json';
// Import the plugin here
import { Auth0Plugin } from './auth';
var domain= "dev-ha-6xe49.eu.auth0.com";
var client_id="So9c7EZPKHHJSbKLbHm0iEhO47lkHgPX";
// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  client_id,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');

