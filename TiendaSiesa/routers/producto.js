import express from "express";
import producto from "../controller/producto.js";

const router = express.Router();

router.post("/registerProducto", producto.registerProducto);

export default router