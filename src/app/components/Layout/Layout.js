import './Layout.scss'
import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'

const Layout = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <div className='layout'>
            <Header />
            <div className='main'>
                {!clicked ? (
                    <>
                        <div className='employeeQuery'>
                            LOOKING FOR AN EMPLOYEE?
                        </div>
                        <div className='clickOnSearchBar'>Click on the search bar to learn our suggestions</div>
                    </>
                ) :
                    (
                        <div className='employeeQuery'>
                            SEARCH RESULTS
                        </div>
                    )
                }
                < div className='searchBar'>
                    <SearchBar
                        clicked={clicked}
                        setClicked={setClicked}
                    />
                </div>
            </div>
        </div >
    )
}
export default Layout