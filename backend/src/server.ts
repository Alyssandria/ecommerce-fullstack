import express from "express"
import CONFIG from "./config/config"
import routeHandler from "./routes/auth.routes"

const app = express();

app.use(express.json());

app.use(routeHandler);

app.listen(CONFIG.PORT, () => console.log(`Server running at port ${CONFIG.PORT}`));
