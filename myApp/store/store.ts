import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from '@/store/root-reducer'
import { configureStore } from '@reduxjs/toolkit'
import { rtkQueryErrorLogger } from '@/store/middlewares/error'
import { api } from '@/store/api/api'
import { setupListeners } from '@reduxjs/toolkit/query'

const persistConfig = {
	key: 'cyberNews',
	storage,
	whiteList: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
			.concat(rtkQueryErrorLogger)
			.concat(api.middleware)
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
