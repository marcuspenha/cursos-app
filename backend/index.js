require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Rota POST para salvar dados
app.post("/contato", async (req, res) => {
  const { nome, mensagem } = req.body;

  if (!nome || !mensagem) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  try {
    const sql = "INSERT INTO contatos (nome, mensagem) VALUES (?, ?)";
    await pool.query(sql, [nome, mensagem]);

    res.status(200).json({ message: "Mensagem salva com sucesso!" });
  } catch (erro) {
    console.error("Erro ao salvar no MySQL:", erro);
    res.status(500).json({ error: "Erro no servidor" });
  }
});

// Iniciar servidor
app.listen(3001, () => {
  console.log("Backend rodando na porta 3001");
});
