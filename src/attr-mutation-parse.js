export default ({ type }) => ({
  string: String,
  number: Number,
  boolean: Boolean,
})[type];
