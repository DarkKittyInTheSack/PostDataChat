import { PostDao } from "src/dao/PostDao";
import { PrismaService } from "./PrismaService";
import { PostUser } from "src/model/PostUser";
import { JwtService } from "@nestjs/jwt";
export declare class PostService implements PostDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    checkInputPostData(postData: PostUser, auth: string): string;
    getPostByUserId(userId: string): Promise<any>;
    getPostByType(typeId: string): Promise<any>;
    getPostById(id: string): Promise<any>;
    addNewPost(postData: PostUser, auth: string): Promise<any>;
    updateCurrentPost(postData: PostUser, id: string, auth: string): Promise<any>;
    deletePost(id: string, auth: string): Promise<any>;
}
