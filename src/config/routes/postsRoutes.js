import express from "express";
import multer from "multer";
import cors from "cors";
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem} from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200,

}


const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "uploads/");
    },
    filename: function (req, file, cb){
        cb(null, file.originalname);
    }
})

const upload = multer({dest:"./uploads", storage});

const router = express.Router();

router.use(cors(corsOptions));

router.get("/", listarPosts);
router.post("/", postarNovoPost);
router.post("/upload", upload.single("imagem"), uploadImagem);


router.put("/upload/:id", atualizarNovoPost);



//const routes = (app) => {
//    app.use(express.json());
//    app.get("/posts", listarPosts);
//    app.post("/posts", postarNovoPost);
//}

//export default routes;

export default router;