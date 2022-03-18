// ========== Auth Actions

export const setTokens = (data) => ({
  type: 'SET_TOKENS',
  payload: {
    ...data,
  },
});

export const setAccessToken = (accessToken) => ({
  type: 'SET_ACCESS_TOKEN',
  payload: {
    accessToken,
  },
});

export const setRefreshToken = (refreshToken) => ({
  type: 'SET_REFRESH_TOKEN',
  payload: {
    refreshToken,
  },
});

export const removeTokens = () => ({
  type: 'REMOVE_TOKENS',
});

export const removeAccessToken = () => ({
  type: 'REMOVE_ACCESS_TOKEN',
});

export const removeRefreshToken = () => ({
  type: 'REMOVE_REFRESH_TOKEN',
});
