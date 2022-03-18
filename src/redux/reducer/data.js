// ========== Data Reducer

const initialState = {
  value: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA': {
      return {
        ...state,
        value: !state.value,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default dataReducer;
