import {Router} from "express";
import addPost from "../post_routes/add_post";

const generalRouter = Router();

generalRouter.use("/", addPost);

export default generalRouter;
