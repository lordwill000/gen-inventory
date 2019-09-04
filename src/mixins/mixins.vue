<script>
export default {
  methods: {
    capitalize(string) {
      return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    },
    replaceString(string, searchVal, newVal) {
      return string.replace(searchVal, newVal);
    },
  },
};
</script>
