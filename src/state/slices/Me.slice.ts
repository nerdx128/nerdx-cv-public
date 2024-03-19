import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Me } from '@definitions/johnny/Me';

interface meState {
    me: Me;
}

const initialState: meState = {
    me: {
        firstName: '',
        lastName: '',
        email: '',
        id: '',
        position: '',
        archived: false,
    },
};

export const meSlice = createSlice({
    initialState: initialState,
    name: 'me',
    reducers: {
        setMe: (state, action: PayloadAction<Me>) => {
            state.me = action.payload;
        },
        clearMe: (state) => {
            state = initialState;
        },
    },
});

export const { setMe, clearMe } = meSlice.actions;

export default meSlice.reducer;
