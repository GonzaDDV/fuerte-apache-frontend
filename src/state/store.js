import {action, createStore, thunk} from 'easy-peasy';
import {url} from '../functions/constants';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {decode} from 'base-64';

// TYPES: trash, special, recycle

getUser = async(callback) => {
  const token = await AsyncStorage.getItem('token');
  const payload = JSON.parse(decode(token.split('.')[1]));
  const idUsuario = payload.result.id_usuario;
  callback(idUsuario);
}

const initialState = {
  citizen: {
    types: {
      trash: {selected: false, amount: 1},
      recycle: {selected: false, amount: 1},
      special: {selected: false, amount: 1},
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
      recycle: {selected: false},
      special: {selected: false},
    },
    routeStarted: false,
    message: '',
    collected: [],
  },
  account: {
    loading: false,
    error: {},
    loggedIn: false,
    token: '',
    idUsuario: '',
    data: {},
  },
};

getUser((idUsuario) => {
  initialState.account.idUsuario = idUsuario;
})

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
    Object.keys(state.employee.types).forEach(
      (item) => (state.employee.types[item].selected = false),
    );
    state.employee.types[payload].selected = !isSelected;
  }),

  setAccountData: action((state, payload) => {
    state.account = {...state.account, ...payload};
  }),
  setLoading: action((state, payload) => {
    state.account.loading = payload;
  }),

  login: thunk(async (actions, payload) => {
    actions.setLoading(true);
    try {
      const res = await axios.post(
        'https://fuerteback.stemit.com.ar/api/users/login',
        payload.data,
      );
      actions.setLoading(false);
      if (res.status === 200 && res.data.success === 1) {
        actions.setAccountData(res.data);
        await AsyncStorage.setItem('loggedIn', JSON.stringify(true));
        await AsyncStorage.setItem('token', res.data.token);
        payload.callback();
      } else {
        actions.setAccountData({error: {error: true, msg: res.data}});
      }
    } catch (err) {
      actions.setAccountData({error: {error: true, msg: err.response.data}});
    }
  }),

  logout: thunk(async (actions, payload) => {
    actions.setLoading(true);
    await AsyncStorage.setItem('loggedIn', JSON.stringify(false));
    await AsyncStorage.setItem('token', '0');
    payload.callback();
    actions.setLoading(false);
  }),

  register: thunk(async (actions, payload) => {
    actions.setLoading(true);
    try {
      const res = await axios.post(
        'https://fuerteback.stemit.com.ar/api/users/register',
        payload.data,
      );
      actions.setLoading(false);
      if (res.data.success === 1) {
        payload.callback();
      } else {
        actions.setAccountData({error: {error: true, msg: res.data}});
      }
    } catch (err) {
      actions.setAccountData({error: {error: true, msg: err.response.data}});
    }
  }),
  setRouteStarted: action((state, payload) => {
    state.employee.routeStarted = payload;
  }),
  collectMarker: action((state, payload) => {
    state.employee.collected.push({
      id_residuo: payload.id,
      id_recolector: payload.idUsuario,
      estado: false,
      fecha_hora_recoleccion: Date.now().toLocaleString(),
    });
  }),
  finishRoute: thunk(async (actions, payload, {getStoreState}) => {
    const {
      employee: {collected},
    } = getStoreState();
    const res = await axios.post(
      'https://fuerteback.stemit.com.ar/api/users/terminarRecorrido',
      {data: collected},
    );
    if (res.data.success === 1) {
      payload.callback();
      console.log(res?.data);
    }
  }),
});
