import { ChangeEvent, FC, Fragment, useEffect, useState } from 'react';
import { Filter as FilterType, Option } from '@definitions/base';
import { OverridableProps } from '@components/Overridable';
import { useAppDispatch, useAppSelector } from '@state/hooks';
import { Filter } from '@components/Base/Filter/Filter';
import {
    FilterButtonMobile,
    FilterMobile,
    SortMenu,
} from '@components/Base/Filter';
import { Menu, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { classNames, createFilterOptions, toTitleCase } from '@libs/utils';
import { MdSort } from 'react-icons/md';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Category } from '@components/Base/Filter';
import {
    clearFilters,
    setFilter,
    setFilteredPlants,
} from '@state/slices/Plants.slice';
import {
    addActiveFilters,
    removeActiveFilters,
} from '@state/slices/Plants.slice';
import plants from '@pages/Hobbies/Plants/Plants';
import { Plant } from '@definitions/johnny/Plants';
import { Simulate } from 'react-dom/test-utils';
import play = Simulate.play;

type PlantFilterProps<P = OverridableProps> = P;

export const PlantFilterBar: FC<PlantFilterProps> = (props) => {
    const { id, className, style, children, ...rest } = props;
    const dispatch = useAppDispatch();
    const plants = useAppSelector((state) => state.plants.list) as Array<Plant>;
    const filteredPlants = useAppSelector(
        (state) => state.plants.active.list
    ) as Array<Plant>;
    const filters = useAppSelector(
        (state) => state.plants.filter
    ) as Array<FilterType>;
    const activeFilters = useAppSelector(
        (state) => state.plants.active.filters
    ) as Array<string>;
    const [open, setOpen] = useState(false);
    const sortOptions = [
        { name: 'Most Popular', href: '#' },
        { name: 'Best Rating', href: '#' },
        { name: 'Newest', href: '#' },
    ];

    useEffect(() => {
        if (activeFilters.length === 0) {
            console.log('No filters');
            dispatch(setFilteredPlants([...plants]));
        }
        console.log({ activeFilters });
        let filtered = [] as Array<Plant>;
        let orderFilters = activeFilters.filter((filter) => {
            return filter.indexOf('Order') > -1;
        });
        let familyFilters = activeFilters.filter((filter) => {
            return filter.indexOf('Family') > -1;
        });
        let genusFilters = activeFilters.filter((filter) => {
            return filter.indexOf('Genus') > -1;
        });
        let orderPlants = [] as Array<Plant>;
        let familyPlants = [] as Array<Plant>;
        let genusPlants = [] as Array<Plant>;
        let originalFamilyFilters = filters.filter((filter) => {
            return filter.name === 'Family';
        });
        orderFilters.forEach((filter) => {
            const [category, value] = filter.split(':');
            let key: keyof Plant = category.toLowerCase() as keyof Plant;
            orderPlants = [
                ...orderPlants,
                ...plants.filter((plant) => plant[key] === value),
            ];
            dispatch(setFilteredPlants(orderPlants));
        });
        familyFilters.forEach((filter) => {
            const [category, value] = filter.split(':');
            let key: keyof Plant = category.toLowerCase() as keyof Plant;
            familyPlants = [
                ...familyPlants,
                ...plants.filter((plant) => plant[key] === value),
            ];
            dispatch(setFilteredPlants(familyPlants));
        });
        genusFilters.forEach((filter) => {
            const [category, value] = filter.split(':');
            let key: keyof Plant = category.toLowerCase() as keyof Plant;
            genusPlants = [
                ...genusPlants,
                ...plants.filter((plant) => plant[key] === value),
            ];
            dispatch(setFilteredPlants(genusPlants));
        });
    }, [activeFilters]);

    useEffect(() => {
        console.log({ filteredPlants });
    }, [filteredPlants]);

    useEffect(() => {
        console.log({ filters });
    }, [filters]);

    return (
        <Filter>
            {/*Sort Menu*/}
            <SortMenu sortOptions={sortOptions} />
            <Menu as="div" className="relative inline-block text-left">
                <FilterButtonMobile setOpen={setOpen} />
                <FilterMobile
                    open={open}
                    setOpen={setOpen}
                    filters={filters}
                    id={'filter-mobile'}
                />
                <Popover.Group className="hidden sm:flex sm:items-baseline sm:space-x-8">
                    {activeFilters.length > 0 && (
                        <div
                            className={'cursor-pointer'}
                            onClick={() => dispatch(clearFilters())}
                        >
                            Clear Filters
                        </div>
                    )}
                    {filters.map((category, i) => {
                        return category.options.length > 1 ? (
                            <Category
                                key={category.name}
                                category={category}
                                index={i}
                            />
                        ) : null;
                    })}
                    <div
                        className={'text-sm text-gray-500'}
                    >{`Showing ${filteredPlants.length} plants`}</div>
                </Popover.Group>
            </Menu>
            {/*{activeFilters.map((filter, i) => (*/}
            {/*    <p key={i}>{filter}</p>*/}
            {/*))}*/}
        </Filter>
    );
};
