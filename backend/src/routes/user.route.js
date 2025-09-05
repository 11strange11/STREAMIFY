import express from "express";
import { getRecommendedUsers, getMyFriends } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();


// Applies auth middleware to all routes
router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends" , getMyFriends);

export default router;