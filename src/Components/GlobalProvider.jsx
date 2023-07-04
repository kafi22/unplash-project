import { createContext, useContext, useEffect, useState } from "react";

const useContextApi = createContext()

const getInitialDarkMood = () => {
    const getDarkMood = window.matchMedia('(prefers-color-scheme:dark)').matches;
    const getLocalValue = localStorage.getItem('darkTheme') === 'true';
    return getLocalValue || getDarkMood;
}
export const GlobalProvider = ({children}) => {

    const [toggle, setToggle] = useState(getInitialDarkMood())

    const theToggleFun = () => {

        const newToggle = !toggle
        setToggle(newToggle)
        localStorage.setItem('darkTheme', JSON.stringify(newToggle))
    }


    useEffect(() => {

        document.body.classList.toggle('dark-theme', toggle)
    }, [toggle])


    const [search, setSearch] = useState('dog')

    const allFeature = {
        toggle,
        setToggle,
        theToggleFun,
        search,
        setSearch
    }

    return (

        <useContextApi.Provider value={{allFeature}}>
            {children}
        </useContextApi.Provider>

    )
}

export const useCustomHooks =  () => {

    return useContext(useContextApi)
}

