import express from "express";
import routes from "./routes";
import { setupSwagger } from "./swagger";

// Cria a aplicação Express
const app = express();

// MIDDLEWARE: Habilita parsing de JSON no body das requisições
app.use(express.json());

// Configura a documentação Swagger
setupSwagger(app);

// Define que todas as rotas começam com /api
app.use("/api", routes);

// Define a porta do servidor (usa variável de ambiente ou padrão 3000)
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Swagger em http://localhost:${PORT}/docs`);
});
