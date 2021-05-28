<template>
  <section>
    <div class="container d-flex flex-column align-items-center justify-content-center pt-5">
      <div
        v-if="!showResult"
        class="wrapper"
      >
        <h1 class="mb-4">
          Suitability Test
        </h1>
        <ProgressBar />
        <div class="wrapper-content-body">
          <div
            v-for="(item, idx) of groups"
            :key="idx"
          >
            <questions-group
              v-if="idx === page"
              :current-page="idx"
              :title="item.title"
              :items="item.questions"
              :group-length="groups.length"
              @change="setQuestionGroup"
            />
          </div>
        </div>
      </div>
      <Result v-else />
    </div>
  </section>
</template>

<script>

import QuestionsGroup from '@/components/collections/QuestionsGroup/QuestionsGroup';
import { mapGetters, mapActions } from 'vuex';
import Result from '@/components/collections/Result/Result';
import ProgressBar from '@/components/ui/ProgressBar/ProgressBar';

export default {
  name: 'Home',
  components: {
    ProgressBar,
    Result,
    QuestionsGroup,
  },
  data() {
    return {
      test: false,
      page: 0,
    };
  },
  computed: {
    ...mapGetters({
      groups: 'getGroups',
      showResult: 'getShowResult',
    }),
  },
  mounted() {
    this.GET_SUITABILITY();
  },
  methods: {
    ...mapActions({
      GET_SUITABILITY: 'GET_SUITABILITY',
    }),
    setQuestionGroup(index) {
      this.page += index;
    },
  },
};
</script>
