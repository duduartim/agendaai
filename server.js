import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Servidor do AgendAi está rodando!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
