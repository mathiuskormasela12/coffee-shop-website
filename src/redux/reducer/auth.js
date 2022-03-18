// ========== Auth Reducer

const initialState = {
  accessToken: null,
  refreshToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKENS': {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    }

    case 'SET_ACCESS_TOKEN': {
      return {
        ...state,
        accessToken: action.payload.accessToken,
      };
    }

    case 'SET_REFRESH_TOKEN': {
      return {
        ...state,
        refreshToken: action.payload.refreshToken,
      };
    }

    case 'REMOVE_TOKENS': {
      return {
        ...state,
        accessToken: null,
        refreshToken: null,
      };
    }

    case 'REMOVE_ACCESS_TOKEN': {
      return {
        ...state,
        accessToken: null,
      };
    }

    case 'REMOVE_REFRESH_TOKEN': {
      return {
        ...state,
        refreshToken: null,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default authReducer;
