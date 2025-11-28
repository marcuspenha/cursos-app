export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer
      style={{
        marginTop: "24px",
        padding: "16px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <small>
        © {anoAtual} Catálogo de Cursos - Projeto Front-end Frameworks
      </small>
    </footer>
  );
}
