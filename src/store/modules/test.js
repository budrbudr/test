import { apiCall } from '@/services/axios';

export default {
  actions: {
    async GET_SUITABILITY({ commit }) {
      await apiCall('get', 'suitability')
        .then((res) => {
          commit('UPDATE_GROUPS', res.data.groups);
        })
        .catch((err) => console.log(err));
    },
  },
  mutations: {
    UPDATE_GROUPS(state, arr) {
      arr.map((item) => {
        item.questions.map((value) => {
          Object.assign(value, {
            checked: {
              checked: false,
              title: '',
            },
          });

          return value;
        });

        return item;
      });
      state.groups = arr;
    },
    UPDATE_RESULT(state, result) {
      const arr = state.groups;
      Object.assign(arr[result.currentPage].questions[result.index], {
        checked: {
          checked: true,
          title: result.question,
        },
      });
      state.result = arr;
    },
    UPDATE_SHOW_RESULT(state, status) {
      state.showResult = status;
    },
  },
  state: {
    groups: [],
    result: [],
    showResult: false,
  },
  getters: {
    getGroups: (state) => state.groups,
    getResult: (state) => state.result,
    getShowResult: (state) => state.showResult,
    getProgress(state) {
      return state.result.map((item) => item.questions.map((value) => value.checked.checked));
    },
  },
};
