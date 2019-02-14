export default ({ type }) => ({
  string: String,
  integer: Number,
  boolean: Boolean,
  email: String,
  choice: String,
  date: String,
  text: String,
  field: String,
  slug: String,
  password: String,
  'multiple choice': Object,
})[type];
