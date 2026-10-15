
import { Link } from "react-router-dom";
import "../styles/auth.css";

function Register() {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-logo">🌱 Desconecta</div>

        <h1>Crea tu cuenta</h1>
        <p>Comienza tu experiencia de desconexión.</p>

        <form className="auth-form">
          <label htmlFor="name">Nombre completo</label>
          <input id="name" type="text" required />

          <label htmlFor="email">Correo electrónico</label>
          <input id="email" type="email" required />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            minLength={8}
            required
          />

          <button type="submit">
            Crear cuenta
          </button>
        </form>

        <p className="auth-footer">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login">Inicia sesión</Link>
        </p>
      </section>
    </main>
  );
}

export default Register;
