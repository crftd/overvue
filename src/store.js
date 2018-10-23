/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import archillect from './services/archillect';

Vue.use(Vuex);

export const RESET_MUTATION = 'RESET_MUTATION';
export const SHOW_IMAGE_MUTATION = 'SHOW_IMAGE_MUTATION';
export const SHOW_COUNTER_MUTATION = 'SHOW_COUNTER_MUTATION';

export const FETCH_IMAGE_ACTION = 'FETCH_IMAGE_ACTION';

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
  [SHOW_COUNTER_MUTATION]: (state, imageId) => {
    state.counter = true;
    state.imageId = imageId;
    state.imageUrl = null;
  },
  [SHOW_IMAGE_MUTATION]: (state, imageUrl) => {
    state.counter = false;
    state.imageId = null;
    state.imageUrl = imageUrl;
  },
};

export const actions = {
  [FETCH_IMAGE_ACTION]: async ({ commit }, imageId) => {
    try {
      const { url } = await archillect.getImage(imageId);
      if (url) {
        commit(SHOW_IMAGE_MUTATION, url);
      } else {
        commit(SHOW_COUNTER_MUTATION, imageId);
      }
    } catch (e) {
      commit(RESET_MUTATION);
    }
  },
};

export default new Vuex.Store({
  state: { ...DEFAULT_STATE },
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production',
});
