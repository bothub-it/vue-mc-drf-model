<template>
  <input
    type="date"
    v-model="value" />
</template>

<script>
export default {
  name: 'DateInput',
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
