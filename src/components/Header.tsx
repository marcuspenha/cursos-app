import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { usuario, logout } = useAuth();

  return (
    <header style={{ padding: "16px", backgroundColor: "#282c34", color: "#fff" }}>
      <h1>Catálogo de Cursos</h1>
      <nav style={{ marginTop: "8px" }}>
        <Link to="/" style={{ marginRight: 16, color: "#61dafb" }}>Home</Link>
        <Link to="/cursos" style={{ marginRight: 16, color: "#61dafb" }}>Cursos</Link>
        <Link to="/sobre" style={{ marginRight: 16, color: "#61dafb" }}>Sobre</Link>
        <Link to="/contato" style={{ color: "#61dafb" }}>Contato</Link>
      </nav>
      <div style={{ marginTop: 8 }}>
        {usuario ? (
          <>
            <span>Olá, {usuario}</span>
            <button onClick={logout} style={{ marginLeft: 8 }}>Sair</button>
          </>
        ) : (
          <span>Usuário não logado</span>
        )}
      </div>
    </header>
  );
}
