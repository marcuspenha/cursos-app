import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const headerStyle: React.CSSProperties = {
  padding: "16px",
  backgroundColor: "#282c34",
  color: "#fff",
};

const navLinkStyle: React.CSSProperties = {
  marginRight: 16,
  color: "#61dafb",
};

export default function Header() {
  const { usuario, logout } = useAuth();

  const estaLogado = Boolean(usuario);

  return (
    <header style={headerStyle}>
      <h1>Catálogo de Cursos</h1>

      <nav style={{ marginTop: "8px" }}>
        <Link to="/" style={navLinkStyle}>
          Home
        </Link>
        <Link to="/cursos" style={navLinkStyle}>
          Cursos
        </Link>
        <Link to="/sobre" style={navLinkStyle}>
          Sobre
        </Link>
        <Link to="/contato" style={{ color: "#61dafb" }}>
          Contato
        </Link>
      </nav>

      <div style={{ marginTop: 8 }}>
        {estaLogado ? (
          <>
            <span>Olá, {usuario}</span>
            <button
              onClick={logout}
              style={{ marginLeft: 8 }}
            >
              Sair
            </button>
          </>
        ) : (
          <span>Usuário não logado</span>
        )}
      </div>
    </header>
  );
}
