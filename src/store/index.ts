import Vue from "vue";
import Vuex from "vuex";
import {state, State} from '@/state'
import * as user from './modules/user'
import * as event from './modules/event'
import * as category from './modules/category'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    event,
    category
  }
});
