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
      <input
        type="checkbox"
        v-model="people.activated" />
      <select v-model="people.gender">
        <option value="M">Male</option>
        <option value="F">Female</option>
        <option value="O">Other</option>
        <option value="I">Invalid</option>
      </select>
      <select v-model="people.country">
        <option value="BR">Brasil</option>
        <option value="JP">Japão</option>
        <option value="EU">EUA</option>
        <option value="I">Invalid</option>
      </select>
      <input 
        type="date"
        v-model="people.birthday">
      <pre>{{ people.errors }}</pre>
      <button type="submit">Save</button>
    </form>
  </section>
</template>

<script>
import { getModel } from 'vue-mc-drf-model';
import { getPeopleOptions } from '../requests';
import PeopleModelBase from '../models/people-base';
import _ from 'lodash';


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
    }
  }
};
</script>
