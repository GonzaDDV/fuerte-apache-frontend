import {action, createStore} from 'easy-peasy';

// TYPES: trash, special, recycle

const initialState = {
  citizen: {
    types: {
      trash: {selected: false, amount: 1},
      special: {selected: false, amount: 1},
      recycle: {selected: false, amount: 1},
    },
    message: '',
    location: {
      prefersAddress: false,
      address: '',
    },
  },
  employee: {
    types: {
      trash: {selected: false},
      special: {selected: false},
      recycle: {selected: false},
    },
    message: '',
  },
};

export const store = createStore({
  //! STATE
  ...initialState,

  //! ACTIONS
  resetState: action((state, payload) => {
    state.citizen = initialState.citizen;
    state.employee = initialState.employee;
  }),
  setAmount: action((state, payload) => {
    const {type, amount} = payload;
    state.citizen.types[type].amount = amount;
  }),
  setSelected: action((state, payload) => {
    const isSelected = state.citizen.types[payload].selected;
    state.citizen.types[payload].selected = !isSelected;
  }),
  setMessage: action((state, payload) => {
    state.citizen.message = payload;
  }),

  setEmployeeSelected: action((state, payload) => {
    const isSelected = state.employee.types[payload].selected;
    state.employee.types[payload].selected = !isSelected;
  }),
});
