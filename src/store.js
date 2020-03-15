import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    count:1
  },
  getters:{
    double: state =>state.count*2,
    triple: state =>state.count*3
  },
  mutations:{
    increment(state,number){
      state.count += number
    },
    decrement(state,num){
      state.count -= num
    }
  }
});
