import React, { createContext, useContext, useReducer } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS, THEMES } from '../constants';

// Initial state
const initialState = {
  theme: THEMES.LIGHT,
  sidebarOpen: false,
  language: 'en',
  user: null,
  loading: false,
  notifications: [],
};

// Action types
export const actionTypes = {
  SET_THEME: 'SET_THEME',
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_USER: 'SET_USER',
  SET_LOADING: 'SET_LOADING',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
  CLEAR_NOTIFICATIONS: 'CLEAR_NOTIFICATIONS',
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_THEME:
      return { ...state, theme: action.payload };
    
    case actionTypes.TOGGLE_SIDEBAR:
      return { ...state, sidebarOpen: !state.sidebarOpen };
    
    case actionTypes.SET_LANGUAGE:
      return { ...state, language: action.payload };
    
    case actionTypes.SET_USER:
      return { ...state, user: action.payload };
    
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    
    case actionTypes.ADD_NOTIFICATION:
      return { 
        ...state, 
        notifications: [...state.notifications, { 
          id: Date.now(), 
          ...action.payload 
        }] 
      };
    
    case actionTypes.REMOVE_NOTIFICATION:
      return { 
        ...state, 
        notifications: state.notifications.filter(n => n.id !== action.payload) 
      };
    
    case actionTypes.CLEAR_NOTIFICATIONS:
      return { ...state, notifications: [] };
    
    default:
      return state;
  }
};

// Create contexts
const AppStateContext = createContext();
const AppDispatchContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [storedPreferences] = useLocalStorage(STORAGE_KEYS.USER_PREFERENCES, {});
  
  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,
    ...storedPreferences,
  });

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

// Custom hooks to use the contexts
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppProvider');
  }
  return context;
};

export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within an AppProvider');
  }
  return context;
};

// Action creators
export const actions = {
  setTheme: (theme) => ({ type: actionTypes.SET_THEME, payload: theme }),
  toggleSidebar: () => ({ type: actionTypes.TOGGLE_SIDEBAR }),
  setLanguage: (language) => ({ type: actionTypes.SET_LANGUAGE, payload: language }),
  setUser: (user) => ({ type: actionTypes.SET_USER, payload: user }),
  setLoading: (loading) => ({ type: actionTypes.SET_LOADING, payload: loading }),
  addNotification: (notification) => ({ type: actionTypes.ADD_NOTIFICATION, payload: notification }),
  removeNotification: (id) => ({ type: actionTypes.REMOVE_NOTIFICATION, payload: id }),
  clearNotifications: () => ({ type: actionTypes.CLEAR_NOTIFICATIONS }),
};
