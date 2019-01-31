import { Model } from 'vue-mc';


class PeopleModelBase extends Model {
  // eslint-disable-next-line class-methods-use-this
  routes() {
    return {
      save: 'people/',
    };
  }

  getRequest(config) {
    return super.getRequest(
      Object.assign(
        {},
        config,
        {
          baseURL: 'http://localhost:8000/api/',
        },
      ),
    );
  }
}

export default PeopleModelBase;
