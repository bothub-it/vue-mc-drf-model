<template>
  <section>
    <h2>People Form</h2>
  </section>
</template>

<script>
import { getPeopleOptions } from '../requests';


export default {
  name: 'PeopleForm',
  mounted() {
    getPeopleOptions()
      .then((response) => {
        console.log(response);
      });
  },
};
</script>
