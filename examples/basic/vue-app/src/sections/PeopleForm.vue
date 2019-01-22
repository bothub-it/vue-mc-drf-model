<template>
  <section>
    <h2>People Form</h2>
    <div v-if="people">
      <input 
        type="text"
        v-model="people.name"
        placeholder="name" />
      <input 
        type="text"
        v-model="people.email"
        placeholder="e-mail" />
      <pre>{{ people }}</pre>
      <pre>{{ people.errors }}</pre>
    </div>
    <!-- <form @submit.prevent="onSubmit()">
      <input type="text" v-model='name' name="name" placeholder="name">
      <select name="" id="" v-model='country'>
        <option value="Brasil">Brasil</option>
        <option value="Albania">Albania</option>
        <option value="China">China</option>
      </select>
      <input type="date" name="bday" v-model='birthday' placeholder="Birthday">
      <select name="gender" v-model='gender'>
        <option value="M">Male</option>
        <option value="F">Female</option>
        <option value="O">Other</option>
      </select>
      <input type="submit" value="submit">
  </form> -->
  </section>
</template>

<script>
import { getModel } from 'vue-mc-drf-model';
import { getPeopleOptions } from '../requests';


export default {
  name: 'PeopleForm',
  data() {
    return {
      people: null,
      // submitting: false,
      // name: '',
      // country: '',
      // birthday: '',
      // gender: ''
    };
  },
  mounted() {
    getPeopleOptions()
      .then((response) => {
        const PeopleModel = getModel(response.data.actions.POST);
        console.log(PeopleModel);
        this.people = new PeopleModel();
      });
  },
  methods: {
    onSubmit() {
      const data = {
          name: this.name,
          country: this.country,
          birthday: this.birthday,
          gender: this.gender
        }
        
      try {
        console.log(data);
        
        
      } catch (error) {
        console.log(error);
        
      }
      
    }
  }
};
</script>
