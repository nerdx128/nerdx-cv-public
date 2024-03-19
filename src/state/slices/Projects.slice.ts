import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '@definitions/johnny/Projects';

interface projectState {
    list: Array<Project>;
    current: Project;
}

const initialState: projectState = {
    list: [],
    current: {} as Project,
};

export const projectSlice = createSlice({
    initialState: initialState,
    name: 'project',
    reducers: {
        setProjects: (state, action: PayloadAction<Array<Project>>) => {
            state.list = action.payload;
        },
        setCurrentProject: (state, action: PayloadAction<Project>) => {
            state.current = action.payload;
        },
        clearProjects: (state) => {
            state = initialState;
        },
    },
});

export const { setProjects, setCurrentProject, clearProjects } =
    projectSlice.actions;

export default projectSlice.reducer;
