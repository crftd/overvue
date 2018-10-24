/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import archillect from './services/archillect';

Vue.use(Vuex);

export const RESET_MUTATION = 'RESET_MUTATION';
export const SHOW_IMAGE_MUTATION = 'SHOW_IMAGE_MUTATION';
export const SHOW_COUNTER_MUTATION = 'SHOW_COUNTER_MUTATION';

export const FETCH_IMAGE_ACTION = 'FETCH_IMAGE_ACTION';

export const DEFAULT_STATE = {
  counter: false,
  imageId: null,
  latestImageId: null,
  imageUrl: null,
};

export const mutations = {
  [RESET_MUTATION]: (state) => {
    state.counter = DEFAULT_STATE.counter;
    state.imageId = DEFAULT_STATE.imageId;
    state.imageUrl = DEFAULT_STATE.imageUrl;
    state.latestImageId = DEFAULT_STATE.latestImageId;
  },
  [SHOW_COUNTER_MUTATION]: (state, { imageId, latestImageId }) => {
    state.counter = true;
    state.imageId = imageId;
    state.imageUrl = null;
    state.latestImageId = latestImageId;
  },
  [SHOW_IMAGE_MUTATION]: (state, imageUrl) => {
    state.counter = false;
    state.imageId = null;
    state.latestImageId = null;
    state.imageUrl = imageUrl;
  },
};

export const actions = {
  [FETCH_IMAGE_ACTION]: async ({ commit }, imageId) => {
    try {
      const { url, latestImageId } = await archillect.getImage(imageId);
      if (url) {
        commit(SHOW_IMAGE_MUTATION, url);
      } else if (latestImageId) {
        commit(SHOW_COUNTER_MUTATION, { imageId, latestImageId });
      }
    } catch (e) {
      commit(RESET_MUTATION);
    }
  },
};

export const getters = {
  estimatedTimeOfPost: state => moment().add(10 * (state.imageId - state.latestImageId), 'minutes'),
};

export default new Vuex.Store({
  state: { ...DEFAULT_STATE },
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== 'production',
});
