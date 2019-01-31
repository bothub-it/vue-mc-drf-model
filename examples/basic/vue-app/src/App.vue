<template>
  <div>
    <h1>Vue App</h1>
    <people-form />
  </div>
</template>

<script>
import PeopleForm from './sections/PeopleForm';


export default {
  name: 'App',
  components: {
    PeopleForm,
  },
}
</script>
