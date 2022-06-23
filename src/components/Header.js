import { useAuth } from "../context";
import Login from "./Login";

const Header = () => {
  const { user, setUser} = useAuth();

  

  const logoutHandle = () => {
    setUser(false);
  };

  return (
    <div className="h-[75px] bg-blue-200 flex justify-between items-center px-5 ">
      <h2 className="m-4 text-2xl font-bold text-white">TodoApp</h2>
      {!user && <Login/> ||  <button className="h-10 rounded-xl bg-red-500 text-white text-sm px-4"onClick={logoutHandle}>ÇIKIŞ YAP</button>}
    </div>
  );
};

export default Header;
