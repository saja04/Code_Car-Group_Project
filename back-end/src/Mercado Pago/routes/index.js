import { Router } from "express";
import {
  createOrder,
  receiveWebhook,
} from "../controllers/SDK.js";

const router = Router();

router.post("/create-order", createOrder);

router.post("/webhook", receiveWebhook);

router.get("/success", (req, res) => res.send("Success"));
router.get("/pending", (req, res) => res.send("Pending"));

export default router;