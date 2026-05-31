import express from "express";
import * as ctrl from './auth.controller.js'
const authRoutes = express.Router();

authRoutes.post("/register",ctrl.registerCustomers);
authRoutes.post("/login", ctrl.loginCustomer);
export default authRoutes;