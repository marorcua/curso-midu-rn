// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier', 'airbnb', '@react-native-community'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
