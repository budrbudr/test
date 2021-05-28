<template>
  <div class="wrapper wrapper-result">
    <h2 class="mb-4">
      Answer overview
    </h2>
    <p>
      Here you can see and change your answer
    </p>
    <div id="accordionExample" class="accordion">
      <div
        v-for="(result, id) of results"
        :key="id"
        class="accordion-item"
      >
        <h2 :id="`heading-${id}`" class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse-${id}`"
            aria-expanded="true"
            :aria-controls="`collapse-${id}`"
          >
            {{ result.title }}
          </button>
        </h2>
        <div
          :id="`collapse-${id}`"
          class="accordion-collapse collapse show"
          :aria-labelledby="`heading-${id}`"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div
              v-for="(question, questionIndex) of result.questions"
              :key="questionIndex"
              class="mb-4"
            >
              <strong class="mb-3 d-block">
                {{ question.question }}
              </strong>
              <div>
                {{ question.checked.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Result',
  computed: {
    ...mapGetters({
      results: 'getResult',
    }),
  },
};
</script>
