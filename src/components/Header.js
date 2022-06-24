import { useAuth } from "../context";
import Login from "./Login";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, setUser} = useAuth();

  

  const logoutHandle = () => {
    setUser(false);
  };

  return (
    <div className="h-[75px] bg-blue-200 flex justify-between items-center px-5 ">
      <h2 className="m-4 p-2 text-3xl font-bold rounded-xl text-white bg-orange-400">TodoApp</h2>
      {user &&
      <Link to="/">
       <button className="h-10 rounded-xl bg-orange-400 text-white text-medium px-4"onClick={logoutHandle}>ÇIKIŞ YAP</button>
       </Link>
       }
    </div>
    
  );
};

export default Header;
