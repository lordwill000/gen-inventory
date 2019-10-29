import api from '@/helpers/base';

export const types = {
  SET_FETCH_STATUS: 'SET_FETCH_STATUS',
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  SET: 'SET',
};

const actions = {
  async [types.SET_FETCH_STATUS](ctx, payload) {
    return ctx.commit(types.SET_FETCH_STATUS, payload);
  },
  // eslint-disable-next-line consistent-return
  async [types.REQUEST](ctx) {
    try {
      await ctx.commit(types.SET_FETCH_STATUS, true);
      const data = await api.get('/roles');
      await ctx.dispatch(types.SUCCESS, data);
      return data;
    } catch (error) {
      ctx.dispatch(types.FAIL, error).then(console.log(error));
    } finally {
      ctx.dispatch(types.SET_FETCH_STATUS, false);
    }
  },
  async [types.SUCCESS](ctx, payload) {
    await ctx.dispatch(types.SET, payload);
  },
  async [types.FAIL](ctx, payload) {
    return ctx.commit(types.FAIL, payload);
  },
  async [types.SET](ctx, payload) {
    return ctx.commit(types.SET, payload);
  },
};
export default actions;
