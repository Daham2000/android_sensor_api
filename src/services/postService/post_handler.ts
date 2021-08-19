import {Request, Response} from "express";
import Joi = require("joi");
import PostModel from "../../models/postModel";
import ServiceLocator from "../../utill/serviceLocator";
import {errorResponse} from "../../utill/response";

export default class PostHandler {

    public static async addPost(req: Request, res: Response): Promise<void> {
        const schema = Joi.object({
            accelerometerX: Joi.string().required(),
            accelerometerY: Joi.string().required(),
            accelerometerZ: Joi.string().required(),
            proximity: Joi.string(),
        });
        const validation = schema.validate(req.body);
        if (validation.error) {
            res.status(401).send(validation.error);
            return;
        }
        const body: PostModel = validation.value;
        const service = ServiceLocator.addPostService;
        try {
            await service.addPost(body);
            res.status(201).send({success: true});
        } catch (err) {
            const errorRes = errorResponse(err);
            res.status(errorRes.code).send(errorRes.message);
        }
    }

    public static async getAllPosts(req: Request, res: Response): Promise<void> {
        const service = ServiceLocator.getPostsService;
        try {
            const result = await service.getPosts();
            res.status(201).send({result});
        } catch (err) {
            const errorRes = errorResponse(err);
            res.status(errorRes.code).send(errorRes.message);
        }
    }

}