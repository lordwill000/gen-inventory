<template>
  <div
    v-if="roles.data && branches.data "
    class="work-schedule"
  >
    <div class="d-flex flex-wrap">
      <Dropdown
        class="w-100-md pr-0-md "
        style="width: 260px; padding-right: 16px;"
        label="Position"
        :choices="rolesChoices"
        placeholder="Select position"
      />
      <Dropdown
        :choices="branchesChoices"
        class="w-100-md"
        style="width: 260px;"
        label="Branch Assigned"
        placeholder="Select branch"
      />
    </div>
    <div class="d-flex flex-wrap">
      <Datepicker
        class="w-100-md pr-0-md"
        style="width: 260px; padding-right: 16px;"
        label="Birthdate"
        placeholder="Select birthdate"
        @date-selected="onDateSelected"
      />
      <Dropdown
        :choices="statusChoices"
        class="w-100-md"
        style="width: 260px;"
        label="Employee Status"
        placeholder="Select status"
      />
      <Schedule />
    </div>
  </div>
  <Spinner
    v-else
    :size="3"
  />
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { types as rolesTypes } from '@/store/modules/roles/actions';
import { types as branchesTypes } from '@/store/modules/branches/actions';
import { Dropdown, Datepicker } from '@/components/form-controls';
import Schedule from './Schedule.vue';
import Spinner from '@/components/Spinner.vue';

const {
  mapActions: mapRolesActions,
  mapGetters: mapRolesGetters,
} = createNamespacedHelpers('roles');

const {
  mapActions: mapBranchesActions,
  mapGetters: mapBranchesGetters,
} = createNamespacedHelpers('branches');

export default {
  name: 'WorkSchedule',
  components: {
    Dropdown,
    Datepicker,
    Schedule,
    Spinner,
  },
  data: () => ({
    rolesChoices: [],
    branchesChoices: [],
    statusChoices: [
      {
        id: 0,
        label: 'Full-time',
        val: 'full-time',
      },
      {
        id: 1,
        label: 'Part-time',
        val: 'part-time',
      },
      {
        id: 2,
        label: 'Internship',
        val: 'internship',
      },
    ],
  }),
  computed: {
    ...mapRolesGetters({
      isRolesFetching: 'isFetching',
      roles: 'data',
    }),
    ...mapBranchesGetters({
      isBranchesFetching: 'isFetching',
      branches: 'data',
    }),
  },
  watch: {
    roles(roles) {
      this.populateChoices({ choiceType: 'roles', choices: roles.data });
    },
    branches(branches) {
      this.populateChoices({ choiceType: 'branches', choices: branches.data });
    },
  },
  mounted() {
    if (!this.roles.data) {
      this.fetchRoles();
    } else {
      this.populateChoices({ choiceType: 'roles', choices: this.roles.data });
    }
    if (!this.branches.data) {
      this.fetchBranches();
    } else {
      this.populateChoices({ choiceType: 'branches', choices: this.branches.data });
    }
  },
  methods: {
    ...mapRolesActions({
      fetchRoles: rolesTypes.REQUEST,
    }),
    ...mapBranchesActions({
      fetchBranches: branchesTypes.REQUEST,
    }),
    populateChoices({ choiceType, choices }) {
      switch (choiceType) {
        case 'roles':
          // eslint-disable-next-line array-callback-return
          choices.map((role) => {
            this.rolesChoices = [...this.rolesChoices, {
              id: role._id,
              label: role.name,
              val: role._id,
            }];
          });
          break;
        default:
          // eslint-disable-next-line array-callback-return
          choices.map((branch) => {
            this.branchesChoices = [...this.branchesChoices, {
              id: branch._id,
              label: branch.name,
              val: branch._id,
            }];
          });
      }
    },
    onDateSelected(date) {
      console.log(date);
    },
  },
};
</script>

<style>

</style>
