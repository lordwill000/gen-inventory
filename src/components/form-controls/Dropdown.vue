<template>
  <div class="form__group">
    <label class="form__label">{{ label }}</label>
    <div
      v-on-clickaway="onClickAway"
      class="dropdown__wrapper"
    >
      <input
        type="text"
        readonly
        class="form__control"
        :value="selected ? selected.label : placeholder"
        @click="isDropVisible = !isDropVisible"
      >
      <img
        :class="isDropVisible && 'dropped'"
        src="@/assets/images/ic_expand_more.svg"
        alt="expand_icon"
      >
      <ul
        v-if="isDropVisible"
        class="dropdown"
      >
        <li
          v-for="selection in selections"
          :key="selection.id"
          :class="selection.id === '-1' && 'no-event muted'"
          @click="handleSelectionClick(selection)"
        >
          {{ selection.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'Dropdown',
  mixins: [clickaway],
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    choices: {
      type: Array,
      default: () => [
        {
          id: 0,
          label: 'Choice 1',
          val: 'choice_1',
        },
        {
          id: 1,
          label: 'Choice 2',
          val: 'choice_2',
        },
      ],
    },
  },
  data() {
    return {
      selections: this.choices,
      selected: null,
      isDropVisible: false,
    };
  },
  mounted() {
    this.selections = [
      {
        id: '-1',
        label: this.placeholder,
        val: null,
      },
      ...this.selections,
    ];
  },
  methods: {
    handleSelectionClick(selected) {
      if (selected.val !== null) {
        this.selected = selected;
        this.isDropVisible = false;
      }
    },
    onClickAway() {
      this.isDropVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown__wrapper {
  position: relative;
  img {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    &.dropped {
      transform: translateY(-50%) rotate(180deg);
    }
  }
  .dropdown {
    animation: fade-in-up 0.2s ease-in-out forwards;
    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.12);
    left: 0;
    list-style-type: none;
    margin-bottom: 0;
    opacity: 0;
    padding-left: 0;
    position: absolute;
    top: 40px;
    width: 100%;
    z-index: 1;
    li {
      background-color: #fff;
      cursor: pointer;
      padding: 8px 16px;
      transition: background-color 0.2s ease;
      &:hover {
        background-color: $tertiary;
      }
    }
  }
  input[readonly] {
    cursor: pointer;
    padding-right: 38px;
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    top: 40px;
  }
  100% {
    opacity: 1;
    top: 45px;
  }
}
</style>
