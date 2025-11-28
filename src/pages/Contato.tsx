import { useRef, useState, useEffect } from "react";
import type { FormEvent, ChangeEvent } from "react";

export default function Contato() {
  const nomeInputRef = useRef<HTMLInputElement | null>(null);
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!nome || !mensagem) {
      alert("Preencha nome e mensagem");
      return;
    }

    setLoading(true);

    try {
      const resposta = await fetch("http://localhost:3001/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, mensagem }),
      });

      const data = await resposta.json();

      if (resposta.ok) {
        setEnviado(true);
        setNome("");
        setMensagem("");
      } else {
        alert(data.error || "Erro ao enviar");
      }
    } catch (erro) {
      alert("Erro ao conectar ao servidor");
      console.error(erro);
    }

    setLoading(false);
  }

  function handleNomeChange(event: ChangeEvent<HTMLInputElement>) {
    setNome(event.target.value);
  }

  function handleMensagemChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setMensagem(event.target.value);
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
              onChange={handleNomeChange}
            />
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            Mensagem:
            <textarea
              value={mensagem}
              onChange={handleMensagemChange}
            />
          </label>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {enviado && (
        <p>
          Obrigado pelo contato, {nome}! Sua mensagem foi enviada.
        </p>
      )}
    </section>
  );
}
