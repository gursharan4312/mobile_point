export const userState = {
  authenticated: false,
  email: "admin@admin.com",
  password: "admin",
  firstName: "admin",
  lastName: "admin",
}

export const userReducer = (state, action) => {
  switch (action.type) {
    case "AUTHENTICATE": {
      if (
        action.payload.email === state.email &&
        action.payload.password === state.password
      ) {
        return {
          ...state,
          authenticated: true,
        }
      } else return state
    }
    default:
      return state
  }
}
