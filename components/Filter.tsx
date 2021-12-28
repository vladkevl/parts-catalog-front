import {FilterContainer} from "../styles/style";
import {NextPage} from "next";
import {IFilterProps, ICategory} from "../types";
import React, {useState, useEffect} from "react";

const Filter: NextPage<IFilterProps> = (props) => {
    const {filter, categories, refetch} = props;
    const [value, setValue] = useState(0);

    return (
        <FilterContainer>
            <select>
                <option value={0} onClick={() => {
                    setValue(0);
                    refetch({
                        limit: 10,
                        offset: 0,
                        filter: filter
                    });
                }}>
                    -
                </option>
                {categories.map((category: ICategory) => (
                    <option key={category.id} value={category.id} onClick={() => {
                        setValue(category.id);
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
