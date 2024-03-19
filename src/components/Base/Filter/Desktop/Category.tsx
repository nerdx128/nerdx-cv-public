import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ChangeEvent, FC, Fragment, useState } from 'react';
import { Filter } from '@definitions/base';
import { OverridableProps } from '@components/Overridable';
import { useAppDispatch, useAppSelector } from '@state/hooks';
import {
    addActiveFilters,
    removeActiveFilters,
} from '@state/slices/Plants.slice';
import { Plant } from '@definitions/johnny/Plants';
import { classNames } from '@libs/utils';

type categoryBarProps<
    P = OverridableProps,
    Q = { category: Filter; index: number },
> = P & Q;
export const Category: FC<categoryBarProps> = (props) => {
    const { id, className, style, children, category, index, ...rest } = props;
    const dispatch = useAppDispatch();
    const activeFilters = useAppSelector(
        (state) => state.plants.active.filters
    ) as Array<string>;
    const filteredPlants = useAppSelector(
        (state) => state.plants.active.list
    ) as Array<Plant>;
    const [disabled, setDisabled] = useState(false);

    const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.name, e.currentTarget.value);
        if (e.target.checked) {
            dispatch(
                addActiveFilters(
                    `${e.currentTarget.name}:${e.currentTarget.value}`
                )
            );
        } else {
            dispatch(
                removeActiveFilters(
                    `${e.currentTarget.name}:${e.currentTarget.value}`
                )
            );
        }
    };

    const getActiveFilterCount = (category: string) => {
        return activeFilters.filter((a) => a.indexOf(category) > -1).length;
    };

    return (
        <Popover
            as="div"
            key={category.name}
            id={`desktop-menu-${index}`}
            className="relative inline-block text-left ui-open:outline-none"
        >
            <div id={`${category.name}-btn-container`}>
                <Popover.Button
                    id={`${category.name}-btn`}
                    className="group inline-flex items-center justify-center text-sm font-medium text-gray-200 hover:text-gray-500 focus:outline-none"
                >
                    <span>{category.name}</span>
                    {getActiveFilterCount(category.id) > 0 ? (
                        <span className="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
                            {getActiveFilterCount(category.id)}
                        </span>
                    ) : null}
                    <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 hover:rotate-180 transition transform duration-150 ease-in-out"
                        aria-hidden="true"
                    />
                </Popover.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <form className="space-y-4">
                        {category.options.map((option, optionIdx) => {
                            let key: keyof Plant =
                                category.name.toLowerCase() as keyof Plant;
                            console.log(filteredPlants[0][key]);
                            let count = filteredPlants.filter((plant) => {
                                return plant[key] === option.value;
                            }).length;
                            return (
                                <div
                                    key={option.value}
                                    className="flex items-center"
                                >
                                    <input
                                        id={`filter-${category.id}-${optionIdx}`}
                                        name={`${category.name}`}
                                        type="checkbox"
                                        value={option.value}
                                        checked={activeFilters.includes(
                                            `${category.name}:${option.value}`
                                        )}
                                        disabled={disabled}
                                        className={classNames(
                                            disabled
                                                ? 'border-gray-200'
                                                : 'border-gray-500',
                                            'h-4 w-4 rounded text-indigo-600'
                                        )}
                                        onChange={onFilterChange}
                                    />
                                    <label
                                        htmlFor={`filter-${category.id}-${optionIdx}`}
                                        className={classNames(
                                            disabled
                                                ? 'text-gray-200'
                                                : 'text-gray-900',
                                            'ml-3 whitespace-nowrap pr-6 text-sm font-medium'
                                        )}
                                    >
                                        {`${option.label} (${count})`}
                                    </label>
                                </div>
                            );
                        })}
                    </form>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};
