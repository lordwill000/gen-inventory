module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-underscore-dangle': ['error', { 'allow': ['_id'] }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "global-require": 0,
    'vue/attributes-order' : ["error", {
      "order": [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS", 
        "RENDER_MODIFIERS",
        "GLOBAL", 
        "UNIQUE", 
        "TWO_WAY_BINDING", 
        "OTHER_DIRECTIVES", 
        "OTHER_ATTR", 
        "EVENTS", 
        "CONTENT"
      ]
    }],
    'vue/order-in-components':  ["error", {
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "data",
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        ["template", "render"],
        "renderError"
      ]
    }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
