import Dao from "../../interfaces/dao";
import Post, {PostDocument} from "../../schemaModels/post.model";
import PostModel from "../../models/postModel";
import DataModel from "../../models/dataModel";

export default class PostDao extends Dao {
    constructor() {
        super(Post);
    }

    public async add(post: PostModel): Promise<PostDocument> {
        return super.add(post);
    }

    public async getAllPosts(filterData: DataModel,
    ): Promise<PostDocument[]> {
        return this.model.find().skip((filterData.page-1)*filterData.limit).limit(filterData.limit);
    }

    public async updatePost(id: string, post: PostModel): Promise<PostDocument[]> {
        return this.model.findByIdAndUpdate(id, post);
    }

    public async deletePost(id: string): Promise<PostDocument[]> {
        return this.model.findByIdAndDelete(id);
    }

}