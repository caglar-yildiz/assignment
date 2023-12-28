import express, { Router } from "express";
import { SalesRepsController } from "../controller/salesReps.controller";


export default function router(): Router {
  const router = express.Router();

  const SalesRepsControllerInstance = new SalesRepsController();

  router.get("/", SalesRepsControllerInstance.getSalesRepsRequirements);

  return router;
}