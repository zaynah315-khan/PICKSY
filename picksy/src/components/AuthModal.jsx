 import { useState } from "react";
import {
  signIn,
  signUp
} from "../services/authService";

import logo from "../assets/picksy-logo.jpeg";

function AuthModal({ onClose }) {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      if (mode === "login") {
        await signIn(email, password);
        setMessage("Welcome back to Picksy!");
      } else {
        await signUp(email, password);
        setMessage(
          "Account created! Check your email if confirmation is enabled."
        );
      }

      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >
      <div
        className="auth-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {/* PICKSY LOGO */}
        <div className="auth-logo">
          <img
            src={logo}
            alt="Picksy Logo"
          />
        </div>

        {/* AUTH HEADER */}
        <div className="auth-header">

          <p className="eyebrow">
            {mode === "login"
              ? "WELCOME BACK"
              : "WELCOME TO"}
          </p>

          <h2>
            picksy<span>.</span>
          </h2>

          <p>
            {mode === "login"
              ? "Sign in to continue shopping."
              : "Create your Picksy account."
            }
          </p>

        </div>

        {/* AUTH FORM */}
        <form onSubmit={handleSubmit}>

          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            type="submit"
            className="primary-button auth-submit"
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : mode === "login"
                ? "Login"
                : "Create Account"
            }
          </button>

        </form>

        {/* MESSAGE */}
        {message && (
          <p className="auth-message">
            {message}
          </p>
        )}

        {/* SWITCH LOGIN / SIGNUP */}
        <button
          type="button"
          className="switch-auth"
          onClick={() => {
            setMode(
              mode === "login"
                ? "signup"
                : "login"
            );
            setMessage("");
          }}
        >
          {mode === "login"
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"
          }
        </button>

      </div>
    </div>
  );
}

export default AuthModal;