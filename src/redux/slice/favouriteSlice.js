import { createSelector, createSlice } from '@reduxjs/toolkit'


const favouriteSlice = createSlice({
  name: "favourites",
  initialState:{
    favouriteItemList: [],
  },
  reducers: {
    addToFavourites(state, action){
        const newItem = action.payload;

        const existingItemIndex = state.favouriteItemList.findIndex(
            (item) => item.id === newItem.id
        )
        if(existingItemIndex !== -1){
            state.favouriteItemList[existingItemIndex].quantity++;
        }else{
            state.favouriteItemList.push({
                id: newItem.id,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
                name: newItem.title,
                cover: newItem.images,
            })
        }
    },
    removeFromFavourite(state, action){
      const idToRemove = action.payload;

      state.favouriteItemList = state.favouriteItemList.filter(
        (item) => item.id !== idToRemove
      )
    },

    clearFavourites(state){
        state.favouriteItemList = []
    },
  }
});

export const favouriteActions = favouriteSlice.actions;
export const {clearFavourites} = favouriteSlice.actions;

export const selectTotalFavourites = createSelector(
    (state) =>state.favourites.favouriteItemList,
    (favouriteItemList) => favouriteItemList.length
)

export default favouriteSlice;