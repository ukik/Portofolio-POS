import Vue from 'vue'

import Footer from './widgets/footer'
import Navbar from './widgets/navbar'
import Alert from './widgets/alert'
import DataViewer from './widgets/dataviewer'
import Loading from './widgets/loading'

Vue.component('Alert', Alert)
Vue.component('Footer', Footer)
Vue.component('Navbar', Navbar)
Vue.component('DataViewer', DataViewer)
Vue.component('Loading', Loading)

// import Layout from '../layouts'
// Vue.component('Layout', Layout)