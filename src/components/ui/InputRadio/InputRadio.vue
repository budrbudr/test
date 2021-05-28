<template>
  <div class="form-check mb-3">
    <input
      :id="id"
      :checked="inputValue"
      class="form-check-input"
      :type="type"
      :name="name"
      @change="$emit('input', $event.target.checked)"
    >

    <label class="form-check-label" :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'InputRadio',
  props: {
    value: {
      type: [Boolean, String],
      default: null,
    },
    id: {
      type: [String, Number],
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'radio',
    },
    label: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  watch: {
    value(val) {
      this.inputValue = val;
    },
  },
};
</script>
