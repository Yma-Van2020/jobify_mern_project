import React, { useReducer, useContext } from 'react';
import reducer from './reducer'
import { DISPLAY_ALERT, CLEAR_ALERT } from './actions';

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};

//store and pass down the application's state to all child components
const AppContext = React.createContext()

const AppProvider = ({children}) => {
  //The state values are then passed down to the context using the value prop.
  const [state, dispatch] = useReducer(reducer, initialState)

  //dispatch the action to update global state
  const displayAlert = () => {
    dispatch({type: DISPLAY_ALERT})
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({type: CLEAR_ALERT})
    }, 3000)
  }

  return(
    <AppContext.Provider value={{...state, displayAlert}}>
      {children}
    </AppContext.Provider>
  )
}

//use to access the context values within any component in the React application
const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }