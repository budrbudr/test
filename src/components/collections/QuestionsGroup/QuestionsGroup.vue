<template>
  <div class="questions-group">
    <div class="questions-title-block mb-4">
      <h6>
        {{ title }}
      </h6>
    </div>
    <div class="questions-content-block">
      <div
        v-for="(item, index) of items"
        :key="index"
        class="question-wrap"
      >
        <template v-if="index === page ">
          <h4>
            {{ item.question }}
          </h4>
          <input-radio
            v-for="(value, idx) of item.answers"
            :key="idx"
            :value="value === item.checked.title"
            :name="item.question"
            :label="value"
            @change.native="getSelectedValue(value, index)"
          />
          <div
            v-if="!item.checked.checked"
            class="questions-validate"
          >
            Please provide answer
          </div>
          <div class="questions-buttons-wrap d-flex flex-column">
            <button
              v-if="!(currentPage === groupLength - 1 && index === items.length - 1)"
              :disabled="!item.checked.checked"
              class="btn btn-primary my-4"
              @click="nextQuestion"
            >
              Next questions
            </button>
            <button
              v-else-if="currentPage === groupLength - 1 && index === items.length - 1"
              class="btn btn-primary my-4"
              @click="showResult"
            >
              Show Result
            </button>
            <button
              :disabled="!currentPage && !index"
              class="btn text-decoration-underline text-primary"
              @click="prevQuestion"
            >
              Previous question
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import InputRadio from '@/components/ui/InputRadio/InputRadio';
import { mapMutations } from 'vuex';

export default {
  name: 'QuestionsGroup',
  components: { InputRadio },
  props: {
    title: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default: undefined,
    },
    currentPage: {
      type: [String, Number],
      default: null,
    },
    groupLength: {
      type: [Number, String],
      default: null,
    },
  },
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    ...mapMutations({
      UPDATE_RESULT: 'UPDATE_RESULT',
      UPDATE_SHOW_RESULT: 'UPDATE_SHOW_RESULT',
    }),
    nextQuestion() {
      if (this.page !== this.items.length - 1) {
        this.page++;
      } else {
        this.$emit('change', 1);
      }
    },
    prevQuestion() {
      if (this.page > 0) {
        this.page--;
      } else {
        this.$emit('change', -1);
      }
    },
    getSelectedValue(val, index) {
      this.UPDATE_RESULT({
        currentPage: this.currentPage,
        question: val,
        index,
      });
    },
    showResult() {
      this.UPDATE_SHOW_RESULT(true);
    },
  },
};
</script>

<style lang="scss" scoped>
  .questions {
    &-validate {
      display: flex;
      justify-content: center;
      padding: 10px 20px;
      background-color: whitesmoke;
      color: red;
    }
  }
</style>
