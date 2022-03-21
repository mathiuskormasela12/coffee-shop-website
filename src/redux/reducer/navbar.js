// ========== Data Reducer

const initialState = {
  show: false,
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE': {
      return {
        ...state,
        show: !state.show,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default navbarReducer;
