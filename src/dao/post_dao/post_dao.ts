import Dao from "../../interfaces/dao";
import Post, { PostDocument } from "../../schemaModels/post.model";
import PostModel from "../../models/postModel";

export default class PostDao extends Dao{
    constructor() {
        super(Post);
    }

    public async add(post: PostModel): Promise<PostDocument> {
        return super.add(post);
    }

}