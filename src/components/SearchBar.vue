<template>
  <div class="searchbar__wrapper">
    <img
      src="@/assets/images/ic_search-dark.svg"
      alt="search_icon"
    >
    <input
      type="text"
      class="form__control searchbar"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    placeholder: {
      type: String,
      default: 'Search',
    },
  },
};
</script>

<style lang="scss" scoped>
.searchbar__wrapper {
  position: relative;
  img {
    left: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .searchbar {
    padding-left: 45px;
  }
}
</style>
