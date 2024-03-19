import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Skill } from '@definitions/johnny/Skill';
import { Api } from '@libs/API';

interface skillState {
    list: Array<Skill>;
    current: Skill;
}

const initialState: skillState = {
    list: [],
    current: {} as Skill,
};

export const skillSlice = createSlice({
    initialState: initialState,
    name: 'skill',
    reducers: {
        setSkills: (state, action: PayloadAction<Array<Skill>>) => {
            state.list = action.payload;
        },
        setCurrentSkill: (state, action: PayloadAction<Skill>) => {
            state.current = action.payload;
        },
        clearSkills: (state) => {
            state = initialState;
        },
    },
});

export const { setSkills, setCurrentSkill, clearSkills } = skillSlice.actions;

export default skillSlice.reducer;

export const getSkills = () => async (dispatch: any) => {
    console.log(`NERDX: Gettting Skills`);
    try {
        await Api.skill.getAll().then((res) => dispatch(setSkills(res.skills)));
    } catch (error) {
        console.error(error);
    }
};
