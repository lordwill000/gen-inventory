/* eslint-disable import/prefer-default-export */
export const helpers = {
  methods: {
    capitalize(string) {
      return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    },
    replaceString(string, searchVal, newVal) {
      return string.replace(searchVal, newVal);
    },
    toTitleCase(string) {
      return string.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    },
  },
};
