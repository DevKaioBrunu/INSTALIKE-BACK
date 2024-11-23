import express from "express";
import routes from "./src/config/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"));
app.use(express.json());
app.use("/posts", routes);
app.use("/", routes);
//routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando..."); 
});






