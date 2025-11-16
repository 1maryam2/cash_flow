import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AccountsFilter } from '../types/types';

const initialState: AccountsFilter = {
  search: '',
  type: '',
  dateFrom: '',
  dateTo: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // Action для обновления любого поля фильтра
    setFilter(state, action: PayloadAction<{ filterName: keyof AccountsFilter; value: string }>) {
      const { filterName, value } = action.payload;
      state[filterName] = value;
    },
    // Action для сброса всех фильтров
    resetFilters(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { setFilter, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;