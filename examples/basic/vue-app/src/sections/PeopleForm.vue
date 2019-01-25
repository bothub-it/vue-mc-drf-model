<template>
  <section>
    <h2>People Form</h2>
    <form
      v-if="people"
      @submit.prevent="onSubmit"
    >
      <form-generator 
        v-model="data"
        :drf-model-instance="people" />
      <button type="submit">Save</button>
    </form>
  </section>
</template>

<script>
import { getModel } from 'vue-mc-drf-model';
import { getPeopleOptions } from '../requests';
import PeopleModelBase from '../models/people-base';
import FormGenerator from '../form-generator';


export default {
  name: 'PeopleForm',
  components: {
    FormGenerator,
  },
  data() {
    return {
      people: null,
      data: {}
    };
  },
  mounted() {
    getPeopleOptions()
      .then((response) => {
        const PeopleModel = getModel(
          response.data.actions.POST,
          PeopleModelBase,
        );
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
      this.people.getSaveData()
      this.people.save()
      console.log(this.people);
    }
  }
};
</script>
