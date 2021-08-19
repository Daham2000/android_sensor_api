import PostDao from "../../dao/post_dao/post_dao";
import {PostDocument} from "../../schemaModels/post.model";
import PostModel from "../../models/postModel";

export default class PostService{
    constructor(
        public postDAO:PostDao
    ) {
    }
    async addCategory(post: PostModel): Promise<PostDocument> {
        return this.postDAO.add(post);
    }
}