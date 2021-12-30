import {FilterContainer} from "../styles/style";
import {IFilterProps, ICategory} from "../types";
import {useQuery} from "@apollo/client";
import GET_CATEGORIES from "../lib/graphql/query/getCategories";
import {NextPage} from "next";
import React, {ChangeEvent, useState} from "react";

const Filter: NextPage<IFilterProps> = (props) => {
    const {filter, setFilter} = props;
    const [selectState, setSelectState] = useState({value: '0'});
    const {loading, error, data} = useQuery(GET_CATEGORIES);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectState({value: event.target.value});
        if (event.target.value === '0') {
            setFilter({status: {_eq: 'published'}})
        } else {
            setFilter({...filter, category: {id: {_eq: Number(event.target.value)}}})
        }
    }

    if (loading) return null;
    if (error) return null;

    return (
        <FilterContainer>
            <select value={selectState.value} onChange={handleChange}>
                <option key={0} value={0}>
                    -
                </option>
                {data.categories.map((category: ICategory) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </FilterContainer>
    )
}

export default Filter;
