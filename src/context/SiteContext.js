import {createContext, useContext, useEffect, useState} from 'react'



const Context = createContext();

const Provider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme')||'light')
    const [language, setLanguage] = useState('tr')
    const [todo, setTodo] = useState([])
    
    useEffect(()=>{
      localStorage.setItem('theme', theme)
      localStorage.setItem('todo', todo)
      document.getElementById('root').className = theme
      localStorage.setItem('language', language)
    },[theme, language, todo])
    
    const data ={
      theme,
      setTheme,
      language,
      setLanguage
    }

    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}


export const useSite = () => useContext(Context)
export default Provider
