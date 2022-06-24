import { useAuth } from "../context";
import { Link } from "react-router-dom";
import { useState } from "react";
import users from "../data/users.json";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useAuth();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const currentUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (currentUser) {
      setUser(currentUser);
    }
  };

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Giriş Yapın 🔐
        </h1>

        <form onClick={handleFormSubmit}>
          <div>
            <label htmlFor="username">Kullanıcı adı</label>
            <input
              type="text"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="username"
              value={username}
              placeholder="Kullanıcı adınızı giriniz"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Parola</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              value={password}
              placeholder="Parolanızı giriniz"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <Link to="/home">
              <button
                className="h-10 rounded-xl bg-blue-500 text-white text-sm px-4  m-4 disabled:opacity-20 disabled:cursor-not-allowed"
                disabled={!username || !password}
              >
                GİRİŞ YAP
              </button>
              <button className="h-10 rounded-xl bg-blue-500 text-white text-sm px-4 m-4 ">
                DEVAM ET
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
