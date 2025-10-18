import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store";

export const TotalQuantityShop = createSelector((state: RootState) => state.cart.items, (items) => {
    return Object.values(items).reduce((acc, item) => acc + item, 0)
});