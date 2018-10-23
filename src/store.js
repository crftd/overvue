/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const RESET_MUTATION = 'RESET_MUTATION';
export const SET_IMAGE_URL_MUTATION = 'SET_IMAGE_URL_MUTATION';
export const SET_IMAGE_ID_MUTATION = 'SET_IMAGE_ID_MUTATION';

export const DEFAULT_STATE = {
  counter: false,
  imageId: null,
  imageUrl: null,
};

export const mutations = {
  [RESET_MUTATION]: (state) => {
    state.counter = DEFAULT_STATE.counter;
    state.imageId = DEFAULT_STATE.imageId;
    state.imageUrl = DEFAULT_STATE.imageUrl;
  },
  [SET_IMAGE_ID_MUTATION]: (state, imageId) => {
    state.imageId = imageId;
  },
  [SET_IMAGE_URL_MUTATION]: (state, imageUrl) => {
    state.imageUrl = imageUrl;
  },
};

export default new Vuex.Store({
  state: DEFAULT_STATE,
  mutations,
  actions: {

  },
  strict: process.env.NODE_ENV !== 'production',
});
