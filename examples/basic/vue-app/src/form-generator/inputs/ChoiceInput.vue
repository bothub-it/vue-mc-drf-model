<template>
  <div>
      <select v-model="value" >
        <option
          v-for="choice, i in choices"
          :key="i"
          :value="choice.value">{{choice.display_name}}</option>
          <option value="I">Invalid</option>
      </select>
  </div>
</template>

<script>
export default {
  name: 'DateInput',
  props: {
    choices: {
      required: true,
      type: Array,
    }
  },
  data() {
    return {
      value: '',
    };
  },
  watch: {
    value(val) { 
      this.$emit('input', val);
    },                  
  },    
}
</script>
