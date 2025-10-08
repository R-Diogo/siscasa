import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// rota teste
app.get("/ping", (req, res) => {
  res.json({ status: "ok", message: "Backend rodando" });
});

app.get("/", (req, res) => {
  res.send("Servidor SISCASA rodando 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
