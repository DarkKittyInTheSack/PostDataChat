import { PostUser } from "src/model/PostUser";
import { PostService } from "src/service/PostService";
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    getPostById(id: string): Promise<string>;
    getPostByType(typeId: string): Promise<string>;
    getPostByUserId(userId: string): Promise<string>;
    getPostByKey(key: string): Promise<void>;
    addNewPost(postData: PostUser, auth: string): Promise<string>;
    updatePost(id: string, postData: PostUser, auth: string): Promise<string>;
    deletePost(id: string, auth: string): Promise<string>;
}
