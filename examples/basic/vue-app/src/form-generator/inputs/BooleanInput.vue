<template>
<div>
   <input
    type="checkbox"
    v-model="value" />
</div>
</template>

<script>
export default {
  name: 'BooleanInput',
  data() {
    return {
      value: false,
    };
  },
  watch: {
    value(val) {
      this.$emit('input', val);
    },                  
  },    
}
</script>
