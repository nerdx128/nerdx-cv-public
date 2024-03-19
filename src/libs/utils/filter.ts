import { Plant } from '@definitions/johnny/Plants';
import { Filter, Option } from '@definitions/base';

export const createFilterOptions = (plants: Array<Plant>, name: string) => {
    let key: keyof Plant = name.toLowerCase() as keyof Plant;
    return {
        id: name.toLowerCase(),
        name: name,
        options: Array.from(new Set(plants.map((plant) => plant[key]))).map(
            (k) => {
                return { value: k as string, label: k as string };
            }
        ) as Array<Option>,
    } as Filter;
};
