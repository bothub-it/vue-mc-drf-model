export default ({ type }) => ({
  string: String,
  integer: Number,
  boolean: Boolean,
  email: String,
  choice: String,
  date: Date,
  text: String,
  field: String,
  slug: String,
  'multiple choice': String,
})[type];
