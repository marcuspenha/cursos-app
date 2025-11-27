import { useRef, useState, useEffect } from "react";
import type { FormEvent } from "react";
import { useAuth } from "../context/AuthContext";

export default function Contato() {
  const nomeInputRef = useRef<HTMLInputElement | null>(null);
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);
  const { login } = useAuth();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!nome || !mensagem) return;
    setEnviado(true);
    login(nome); // “loga” o usuário no contexto
  }

  useEffect(() => {
  if (nomeInputRef.current) {
    nomeInputRef.current.focus();
  }
}, []);

  return (
    <section>
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <label>
            Nome:
            <input
              ref={nomeInputRef}
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>
            Mensagem:
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>

      {enviado && (
        <p>
          Obrigado pelo contato, {nome}! Sua mensagem foi enviada.
        </p>
      )}
    </section>
  );
}
