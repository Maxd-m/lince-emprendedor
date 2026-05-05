// src/features/auth/components/LoginForm.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { loginRequest } from "../api/auth.api";

export const LoginForm = () => {
  const navigate = useNavigate();
  const setCredentials = useAuthStore((state) => state.setCredentials);

  // Estados locales para el formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Llamada a la API (ahora estática)
      const data = await loginRequest({ email, password });

      // Guardar en Zustand
      setCredentials(data.user, data.token);

      // Redirigir al usuario al dashboard o home
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Ocurrió un error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-body">
      <h2 className="text-2xl font-bold text-center mb-4">Bienvenido</h2>

      {error && (
        <div className="alert alert-error text-sm py-2 mb-4">
          <span>{error}</span>
        </div>
      )}

      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="admin@ejemplo.com"
          className="input input-bordered"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-control mt-2">
        <label className="label">
          <span className="label-text">Contraseña</span>
        </label>
        <input
          type="password"
          placeholder="123456"
          className="input input-bordered"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="form-control mt-6 flex justify-center">
        <button
          type="submit"
          className={`btn btn-primary ${isLoading ? "loading" : ""}`}
          disabled={isLoading}
        >
          {isLoading ? "Entrando..." : "Iniciar Sesión"}
        </button>
      </div>

      <div className="text-center mt-4 text-sm">
        ¿No tienes cuenta?{" "}
        <span className="text-primary cursor-pointer hover:underline">
          Regístrate
        </span>
      </div>
    </form>
  );
};
