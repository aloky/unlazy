import antfu from '@antfu/eslint-config'

export default await antfu({
  vue: false,
  react: true,
  ignores: ['tsconfig.json'],
})