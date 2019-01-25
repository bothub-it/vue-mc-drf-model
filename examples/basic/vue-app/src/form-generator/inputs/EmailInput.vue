<template>
  <input
    type="email"
    v-model="value" />
</template>

<script>
export default {
  name: 'EmailInput',
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
