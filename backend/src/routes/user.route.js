import express from "express";
import { getRecommendedUsers, getMyFriends, sendFriendRequest } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";



const router = express.Router();


// Applies auth middleware to all routes
router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends" , getMyFriends);

router.post("/friend-request/:id", sendFriendRequest);

export default router;