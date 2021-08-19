import AddPostService from "../services/postService/add_post_service";

export default class ServiceLocator {

    private static readonly instances: Map<string, any> = new Map<string, any>();

    static get addPostService(): AddPostService {
        const key = "add_post_service";
        if (!this.instances.get(key)) {
            this.instances.set(
                key,
                new AddPostService()
            );
        }
        return this.instances.get(key);
    }

}