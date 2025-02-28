import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getOrdersByUser
} from "../controllers/orderController.js";

const router = express.Router();

// Route to create a new order
router.post("/create", createOrder);

// Route to get all orders
router.get("/getorder", getOrders);

router.get("/getOrdersByUser",getOrdersByUser)

// Route to get a specific order by ID
router.get("/:id", getOrderById);

// Route to update an order by ID
router.put("/:id", updateOrder);

// Route to delete an order by ID
router.delete("/:id", deleteOrder);

export default router;