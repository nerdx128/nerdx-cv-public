import { combineReducers } from 'redux';
import { meSlice } from '@state/slices/Me.slice';
import { projectSlice } from '@state/slices/Projects.slice';
import { blockchainSlice } from '@state/slices/Blockchain.slice';
import { skillSlice } from '@state/slices/Skills.slice';
import { plantSlice } from '@state/slices/Plants.slice';
import { experienceSlice } from '@state/slices/Experiences.slice';

export * from './Me.slice';
export * from './Projects.slice';
export * from './Blockchain.slice';

const appReducers = combineReducers({
    blockchain: blockchainSlice.reducer,
    experience: experienceSlice.reducer,
    me: meSlice.reducer,
    plants: plantSlice.reducer,
    project: projectSlice.reducer,
    skills: skillSlice.reducer,
});

export const reducers = (state: any, action: any) => {
    if (action.type === 'RESET') state = undefined;
    return appReducers(state, action);
};
