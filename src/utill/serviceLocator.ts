import AddPostService from "../services/postService/post_service";
import PostDao from "../dao/post_dao/post_dao";

export default class ServiceLocator {

    private static readonly instances: Map<string, any> = new Map<string, any>();

    static get categoryDao(): PostDao {
        const key = "category_dao";
        if (!this.instances.get(key)) {
            this.instances.set(key, new PostDao());
        }
        return this.instances.get(key);
    }

    static get addPostService(): AddPostService {
        const key = "add_post_service";
        if (!this.instances.get(key)) {
            this.instances.set(
                key,
                new AddPostService(this.categoryDao)
            );
        }
        return this.instances.get(key);
    }

}