import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';
import { LogBox } from 'react-native';
import { enableScreens } from 'react-native-screens';
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import { combineReducers, createStore } from 'redux';
import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';
import { AppState } from './types';
// DELETE LATER. WHEN NAVIGATION v5 is used
LogBox.ignoreAllLogs();

// ***** React-Redux Types *****

const rootReducers = combineReducers<AppState>({
  meals: mealsReducer,
});
const store = createStore(rootReducers);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Our useSelector and useDispatch types
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// ***** React-Redux Types *****

export default function App() {
  //This makes is to our app will use more performant screens. It works under the hood.
  enableScreens();

  let [fontsLoaded, err] = useFonts({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  if (err) {
    console.log(err);
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
