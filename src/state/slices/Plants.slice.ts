import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Plant } from '@definitions/johnny/Plants';
import { Api } from '@libs/API';
import { list } from 'postcss';
import { Filter } from '@definitions/base';
import { createFilterOptions } from '@libs/utils';

interface plantState {
    list: Array<Plant>;
    filter: Array<Filter>;
    active: {
        current: Plant;
        filters: Array<string>;
        list: Array<Plant>;
    };
}

export interface PlantFilter {
    kingdom: Filter;
    phylum: Filter;
    class: Filter;
    subclass: Filter;
    order: Filter;
    family: Filter;
    genus: Filter;
}

const initialState: plantState = {
    list: [],
    filter: [],
    active: {
        current: {} as Plant,
        filters: [],
        list: [],
    },
};

export const plantSlice = createSlice({
    initialState: initialState,
    name: 'plant',
    reducers: {
        setPlants: (state, action: PayloadAction<Array<Plant>>) => {
            state.list = action.payload.sort((a, b) =>
                a.common_name.localeCompare(b.common_name)
            );
        },
        setFilter: (state, action: PayloadAction<Array<Filter>>) => {
            state.filter = action.payload;
        },
        setFilteredPlants: (state, action: PayloadAction<Array<Plant>>) => {
            state.active.list = action.payload;
        },
        setCurrentPlant: (state, action: PayloadAction<Plant>) => {
            state.active.current = action.payload;
        },
        addActiveFilters: (state, action: PayloadAction<string>) => {
            if (!state.active.filters.includes(action.payload))
                state.active.filters = [
                    ...state.active.filters,
                    action.payload,
                ];
            console.log('Added Active Filters:', state.active.filters);
        },
        removeActiveFilters: (state, action: PayloadAction<string>) => {
            if (state.active.filters.includes(action.payload))
                state.active.filters = state.active.filters.filter(
                    (f) => f !== action.payload
                );
            console.log('Removed Active Filters:', state.active.filters);
        },
        clearFilters: (state) => {
            state.active.filters = [];
        },
        clearPlants: (state) => {
            state = initialState;
        },
    },
});

export const {
    setPlants,
    setFilter,
    setCurrentPlant,
    setFilteredPlants,
    addActiveFilters,
    removeActiveFilters,
    clearFilters,
    clearPlants,
} = plantSlice.actions;

export default plantSlice.reducer;

export const getPlants = () => async (dispatch: any) => {
    console.log(`NERDX: Gettting Plants`);
    try {
        await Api.plant.getAll().then((res) => {
            dispatch(setPlants(res.plants));
            let filter = createFilters(res.plants);
            dispatch(setFilter(filter as Array<Filter>));
            dispatch(setFilteredPlants(res.plants));
        });
    } catch (error) {
        console.error(error);
    }
};

export const createFilters = (plants: Array<Plant>) => {
    let filterNames = [
        'Kingdom',
        'Phylum',
        'Class',
        'Subclass',
        'Order',
        'Family',
        'Genus',
    ];
    let temp = [] as Array<Filter>;
    let tempPlants = plants;
    filterNames.forEach((name) => {
        temp = [...temp, createFilterOptions(tempPlants, name)];
        let key: keyof Plant = name.toLowerCase() as keyof Plant;
        let values = Array.from(new Set(plants.map((plant) => plant[key])));
        console.log({ name, temp, key, values, tempPlants });
        tempPlants = tempPlants.filter((plant) => {
            return values.includes(plant[key]);
        });
    });
    return temp;
};
