import { Comment } from './../model/Comment';
import { CommentDao } from "src/dao/CommentDao";
import { PrismaService } from "./PrismaService";
import { JwtService } from '@nestjs/jwt';
export declare class CommentService implements CommentDao {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    checkJwtToken(jwtToken: string): boolean;
    getUserFromHeader(jwtToken: string): any;
    checkInputCommentData(commentData: Comment, auth: string): string;
    getCommentByUserId(userId: string): Promise<any>;
    getCommentByPostId(postId: string): Promise<any>;
    getCommentById(id: string): Promise<any>;
    addNewComment(commentData: Comment, auth: string): Promise<any>;
    editComment(commentData: Comment, id: string, auth: string): Promise<any>;
    deleteComment(id: string, auth: string): Promise<any>;
}
