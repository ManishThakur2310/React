import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Auth.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(isLogin ? "Login Successful!" : "Signup Successful!");
  };

  return (
    <div className="container">
      <div className="form-container">
        {/* Toggle */}
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
            type="button"
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
            type="button"
          >
            Signup
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          {isLogin ? (
            <>
              <h2>Login</h2>

              {/* Email */}
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("loginEmail", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  className={errors.loginEmail ? "input-error" : ""}
                />
                {errors.loginEmail && (
                  <p className="error-message">{errors.loginEmail.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  {...register("loginPassword", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Min 6 characters" },
                  })}
                  className={errors.loginPassword ? "input-error" : ""}
                />
                {errors.loginPassword && (
                  <p className="error-message">
                    {errors.loginPassword.message}
                  </p>
                )}
              </div>

              <a className="forgot-link" href="#">
                Forget Password?
              </a>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Login"}
              </button>

              <p>
                New member?{" "}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Signup
                </a>
              </p>
            </>
          ) : (
            <>
              <h2>Signup</h2>

              {/* Email */}
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("signupEmail", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  className={errors.signupEmail ? "input-error" : ""}
                />
                {errors.signupEmail && (
                  <p className="error-message">{errors.signupEmail.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  {...register("signupPassword", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Min 6 characters" },
                  })}
                  className={errors.signupPassword ? "input-error" : ""}
                />
                {errors.signupPassword && (
                  <p className="error-message">
                    {errors.signupPassword.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === watch("signupPassword") ||
                      "Passwords do not match",
                  })}
                  className={errors.confirmPassword ? "input-error" : ""}
                />
                {errors.confirmPassword && (
                  <p className="error-message">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Signing up..." : "Signup"}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Auth;
