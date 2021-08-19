import {Request, Response} from "express";
import Joi = require("joi");
import PostModel from "../../models/postModel";

export default class AddPostHandler {
    public static async AddPost(req: Request, res: Response): Promise<void> {
        const schema = Joi.object({
            accelerometerX: Joi.string().required(),
            accelerometerY: Joi.string().required(),
            accelerometerZ: Joi.string().required(),
        });
        const validation = schema.validate(req.body);
        if (validation.error) {
            res.status(401).send(validation.error);
            return;
        }
        const body: PostModel = validation.value;

    }

}