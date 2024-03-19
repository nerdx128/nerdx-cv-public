import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employer } from '@definitions/johnny/Experience';
import { Api } from '@libs/API';

interface experienceState {
    list: Array<Employer>;
    current: Employer;
}

const initialState: experienceState = {
    list: [],
    current: {} as Employer,
};

export const experienceSlice = createSlice({
    initialState: initialState,
    name: 'experience',
    reducers: {
        setExperience: (state, action: PayloadAction<Array<Employer>>) => {
            state.list = action.payload;
        },
        setCurrentExperience: (state, action: PayloadAction<Employer>) => {
            state.current = action.payload;
        },
        clearExperience: (state) => {
            state = initialState;
        },
    },
});

export const { setExperience, setCurrentExperience, clearExperience } =
    experienceSlice.actions;

export default experienceSlice.reducer;

export const getExperiences = () => async (dispatch: any) => {
    console.log(`NERDX: Gettting Experiences`);
    try {
        await Api.experience
            .getAll()
            .then((res) => dispatch(setExperience(res.employers)));
    } catch (error) {
        console.error(error);
    }
};
