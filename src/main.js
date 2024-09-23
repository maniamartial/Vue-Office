
import { createApp } from 'vue'
import App from './App.vue'
import "./main.css"

import {
	FrappeUI,
	setConfig,
	frappeRequest,

} from 'frappe-ui'


setConfig('resourceFetcher', frappeRequest)
const app= createApp(App)

app.use(FrappeUI)

app.mount('#app')


  // "eslint": "^8.57.0",
    // "eslint-plugin-vue": "^9.23.0",