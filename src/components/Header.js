
import {useSite , useAuth } from '../context'


const Header = () => {
    const {theme, setTheme} = useSite()
    const {user , setUser} = useAuth()

    const loginHandle = () => {
        setUser({
          username : 'enesceb',
          email: 'enesceb@hotmail.com'
        })
    }

    const logoutHandle = () => {
      setUser(false)
    }

  return (
    <div>
        Mevcut tema = {theme} 
        <button onClick={()=> setTheme(theme => theme === "light"? 'dark': 'light')}> tema değiştirici</button>
        <hr></hr> 
     {!user && <button onClick={loginHandle}>giriş yap</button>}
     {user &&  <button onClick={logoutHandle}> çıkış yap </button>}
     <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export default Header