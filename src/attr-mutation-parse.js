export default ({ type }) => ({
  string: String,
  integer: Number,
  boolean: Boolean,
  email: String,
})[type];
