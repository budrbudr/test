<template>
  <div class="wrapper-content-head mb-4">
    <div
      v-for="(progress, id) of progressTotal"
      :key="id"
      class="progress"
    >
      <div
        class="progress-bar"
        role="progressbar"
        :style="`width: ${calculateProgress(progress)}%;`"
        :aria-valuemax="100"
      >
        {{ calculateProgress(progress).toFixed(0) }}%
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProgressBar',
  computed: {
    ...mapGetters({
      progressTotal: 'getProgress',
    }),
  },
  methods: {
    calculateProgress(progress) {
      return (progress.filter((value) => value).length * 100) / progress.length;
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {

    &-content-head {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .progress {
        width: calc(100% / 3 - 25px);
      }
    }
  }
</style>
