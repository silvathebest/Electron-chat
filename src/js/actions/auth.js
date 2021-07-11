import * as api from '../api/auth'

export const registerUser = formData => dispatch =>
  api.register(formData)
    .then(user => {
      dispatch({
        type: 'AUTH_REGISTER_SUCCESS'
      })
      return user
    })