import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({});

export const makeStore = () => {
	return configureStore({
		reducer
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
