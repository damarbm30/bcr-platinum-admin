import { useState } from "react";
import { useForm } from "react-hook-form";

import { loginImg, logo } from "../../assets";
import { adminLogin } from "../../services/auth";
import LoginError from "./LoginError";

const Login = () => {
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    adminLogin(data, setIsError);
  };

  return (
    <section className="container-fluid">
      <div className="row d-flex">
        <div className="col p-0">
          <img src={loginImg} alt="login" className="vh-100" />
        </div>
        <div className="d-flex flex-column col align-items-center justify-content-center">
          <div>
            <img src={logo} alt="logo" className="mb-4" />
            <h1 className="mb-4">Welcome, Admin BCR</h1>
            {isError && <LoginError />}
            <form
              className="d-flex flex-column gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="d-flex flex-column gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Contoh: johndee@gmail.com"
                  className="p-1"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="d-flex flex-column gap-2 mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="6+ karakter"
                  className="p-1"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && (
                  <span className="text-danger">
                    Password minimal 6 karakter
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="btn py-2 text-white btn-primary"
                style={{ backgroundColor: "var(--primaryBlue)" }}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
