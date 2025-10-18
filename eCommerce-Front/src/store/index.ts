import { configureStore, combineReducers } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";
import cart from "./cart/cartSlice";
import wishlist from "./wishlist/wishlistSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web



const rootPersistConfig = {
    key: "root",
    storage,
    whitelist: ["cart", "auth"]
}

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["user", "accessToken"]
}

const cartPersistConfig = {
    key: "cart",
    storage,
    whitelist: ["items"],
}

const rootReducer = combineReducers(
    { auth: persistReducer(authPersistConfig, auth), categories, products, wishlist: wishlist, cart: persistReducer(cartPersistConfig, cart) }
);

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


const persistor = persistStore(store);
export { persistor };