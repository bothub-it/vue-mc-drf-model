<template>
  <section>
    <h2>People Form</h2>
    <form
      v-if="people"
      @submit.prevent="onSubmit"
    >
      <input 
        type="text"
        v-model="people.name"
        placeholder="name" />
      <input 
        type="text"
        v-model="people.email"
        placeholder="e-mail" />
      {{ people.validate() }}
      <pre>{{ people.errors }}</pre>
      <button type="submit">Save</button>
    </form>
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
    };
  },
  mounted() {
    getPeopleOptions()
      .then((response) => {
        const PeopleModel = getModel(response.data.actions.POST);
        this.people = new PeopleModel(
          {},
          null,
          {
            validateOnChange: true,
          },
        );
      });
  },
  methods: {
    onSubmit() {
      console.log(this.people.getSaveData());
      console.log(this.people.save());
    }
  }
};
</script>
