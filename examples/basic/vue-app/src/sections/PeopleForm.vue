<template>
  <section>
    <h2>People Form</h2>
    <form @submit.prevent="onSubmit()">
      <input type="text" name="name" placeholder="name">
      <select name="" id="">
        <option value="Brasil">Brasil</option>
        <option value="Albania">Albania</option>
        <option value="China">China</option>
      </select>
      <input type="date" name="bday" placeholder="Birthday">
      <select name="gender">
        <option value="M">Male</option>
        <option value="F">Female</option>
        <option value="O">Other</option>
      </select>
      <input type="submit" value="submit">
  </form>
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
  methods: {
    onSubmit() {
      console.log('ping here');
      
    }
  }
};
</script>
