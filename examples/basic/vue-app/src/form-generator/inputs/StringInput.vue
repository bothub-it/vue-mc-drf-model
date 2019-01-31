<template>
  <input
    type="string"
    v-model="value" />
</template>

<script>
export default {
  name: 'StringInput',
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
