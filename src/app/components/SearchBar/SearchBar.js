import React, { useState, useEffect } from 'react';
import Item from '../SearchItem/Item';
import './SearchBar.scss';
import { fetchUsers } from '../../utils/apis';

function SearchBar({ clicked, setClicked }) {
    const [search, setSearch] = useState("")
    const [employees, setEmployees] = useState([])
    const [filteredEmployees, setFilteredEmployees] = useState([])
    const [showDropdown, setShowDropdown] = useState(false)

    useEffect(() => {
        setShowDropdown(filteredEmployees.length > 0 ? true : false)
    }, [filteredEmployees]);

    const changeHandler = async (e) => {
        setSearch(e.target.value)
        if (e.target.value.trim().length <= 1) {
            setShowDropdown(false)
        }
        let employees = []
        if (e.target.value.trim().length >= 2 && employees.length === 0) {
            employees = await fetchUsers(e.target.value)
            setEmployees([...employees])
        }
        setFilteredEmployees([...employees].filter((emp) => {
            return emp.name.toLowerCase().includes(e.target.value.trim().toLowerCase()) || emp.workTitle.includes(e.target.value.trim().toLowerCase())
        }))
    }

    const searchHandler = () => {
        setShowDropdown(clicked ? true : false)
        setClicked(!clicked)
    }

    return (
        <div className='searchBar'>
            <div className='p-relative'>
                <input type="text" className='searchInput' value={search} readOnly={clicked} onChange={(e) => changeHandler(e)} />
                <button className="searchBtn" onClick={() => searchHandler()}><i className={`fa-solid ${clicked ? 'fa-x' : 'fa-magnifying-glass'} `}></i></button>
            </div>
            {
                showDropdown && (
                    <div className='itemsList'>
                        {
                            filteredEmployees.map((employee) => {
                                return (
                                    <Item key={employee._id} employee={employee} search={search.trim()} />
                                )
                            })
                        }
                    </div>
                )
            }
            {
                clicked && (<div className='searchedItemsList'>
                    {
                        filteredEmployees.map((employee) => {
                            return (
                                <Item key={employee._id} employee={employee} search={search.trim()} />
                            )
                        })
                    }
                </div>)
            }

        </div>
    );
}
export default SearchBar