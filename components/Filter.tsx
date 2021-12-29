import {FilterContainer} from "../styles/style";
import {IFilterProps, ICategory} from "../types";
import {useQuery} from "@apollo/client";
import GET_CATEGORIES from "../lib/graphql/query/getCategories";
import {NextPage} from "next";

const Filter: NextPage<IFilterProps> = (props) => {
    const {filter, setFilter} = props;
    const {loading, error, data} = useQuery(GET_CATEGORIES);

    if (loading) return null;
    if (error) return null;

    return (
        <FilterContainer>
            <select>
                <option value={0} onClick={() => {
                    setFilter({
                        status: {_eq: 'published'},
                    })
                }}>
                    -
                </option>
                {data.categories.map((category: ICategory) => (
                    <option key={category.id} value={category.id} onClick={() => {
                        setFilter({...filter, category: {id: {_eq: Number(category.id)}}})
                    }}>
                        {category.name}
                    </option>
                ))}
            </select>
        </FilterContainer>
    )
}

export default Filter;
