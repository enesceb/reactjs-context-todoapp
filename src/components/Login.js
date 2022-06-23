import { useAuth } from "../context";
import { Link } from "react-router-dom";

export default function Login() {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(email, password);
  };

  const { user, setUser } = useAuth();

  const loginHandle = () => {
    setUser({
      username: "enesceb",
      email: "enesceb@hotmail.com",
    });
  };

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account 🔐
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Your Password"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <Link to="/Home">
              <button
                className="h-10 rounded-xl bg-blue-500 text-white text-sm px-4 "
                onClick={loginHandle}
              >
                GİRİŞ YAP
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
