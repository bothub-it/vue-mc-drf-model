<template>
  <div>
    <fieldset
      v-for="attr in attrs"
      :key="attr.name">
      <legend>{{ attr.description.label }}</legend>
      <component 
        :choices="attr.description.choices"
        :is="attr.InputComponent"
        v-model="formData[attr.name]"
        @input="update()" />
      <ul>
        <li
          v-for="error, i in drfModelInstance.errors[attr.name]"
          :key="i">{{ error }}</li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
import _ from 'lodash';
import StringInput from './inputs/StringInput';
import DateInput from './inputs/DateInput';
import EmailInput from './inputs/EmailInput';
import BooleanInput from './inputs/BooleanInput';
import ChoiceInput from './inputs/ChoiceInput';


const RELATED_COMPONENT_INPUT = {
  string: StringInput,
  date: DateInput,
  email: EmailInput,
  boolean: BooleanInput,
  choice: ChoiceInput,
};

export default {
  name: 'FormGenerator',
  props: {
    drfModelInstance: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      formData: {}, 
    }
  },
  computed: {
    attrs() {
      return _.filter(
        _.map(
          this.drfModelInstance.attrsDescription,
          (value, key) => {
            return {
              name: key,
              description: value,
              InputComponent: RELATED_COMPONENT_INPUT[value.type] || StringInput,
            };
          },
        ),
        (attr) => !attr.description.read_only,
      );
    },
  },
  methods: {
    update() { 
      this.$emit('input', this.formData);
    },
  }
}
</script>
