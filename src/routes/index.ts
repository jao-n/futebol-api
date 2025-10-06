import { Router } from "express";
import timeRoutes from "./timeRoutes";
import jogadorRoutes from "./jogadorRoutes";
import partidaRoutes from "./partidaRoutes";
import escalacaoRoutes from "./escalacaoRoutes";

const router = Router();

// CONFIGURAÇÃO DAS ROTAS PRINCIPAIS DA API
// Todas as rotas de times começam com /api/times
router.use("/times", timeRoutes);

// Rotas de jogadores: /api/jogadores
router.use("/jogadores", jogadorRoutes);

// Rotas de partidas: /api/partidas
router.use("/partidas", partidaRoutes);

// Rotas de escalações: /api/escalacoes
router.use("/escalacoes", escalacaoRoutes);

export default router;
