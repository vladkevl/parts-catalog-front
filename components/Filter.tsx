import {FilterContainer} from "../styles/style";
import {NextPage} from "next";
import {IFilterProps, ICategory} from "../types";
import React from "react";

const Filter: NextPage<IFilterProps> = (props) => {
    const {filter, setFilter, categories, refetch} = props;

    return (
        <FilterContainer>
            <select>
                {categories.map((category: ICategory) => (
                    <option key={category.id} onClick={() => {
                        refetch({
                            limit: 10,
                            offset: 0,
                            filter: {...filter, category: {id: {_eq: Number(category.id)}}}
                        });
                    }}>
                        {category.name}
                    </option>
                ))}
            </select>
        </FilterContainer>
    )
}

export default Filter;
