
import { Link } from "react-router-dom";
import "../styles/auth.css";

function Login() {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-logo">Desconecta</div>

        <h1>Bienvenido de nuevo</h1>
        <p>Inicia sesión para continuar con tus retos.</p>

        <form className="auth-form">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="Ingresa tu correo"
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            required
          />

          <button type="submit">
            Iniciar sesión
          </button>
        </form>

        <p className="auth-footer">
          ¿No tienes una cuenta?{" "}
          <Link to="/registro">Regístrate aquí</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
