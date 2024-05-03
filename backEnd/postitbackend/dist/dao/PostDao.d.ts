import { PostUser } from "src/model/PostUser";
export interface PostDao {
    checkInputPostData(postData: PostUser, auth: string): string;
    getPostByUserId(userId: string): Promise<any>;
    getPostByType(typeId: string): Promise<any>;
    getPostById(id: string): Promise<any>;
    addNewPost(postData: PostUser, auth: string): Promise<any>;
    updateCurrentPost(postData: PostUser, id: string, auth: string): Promise<any>;
    deletePost(id: string, auth: string): Promise<any>;
}
