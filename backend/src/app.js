import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { productRouter } from "./routes/product.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());
app.use(productRouter);

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
