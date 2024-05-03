import { Award } from "src/model/Award";
export interface AwardDao {
    checkInputAwardData(awardData: Award, auth: string): string;
    getAwardByUserId(userId: string): Promise<any>;
    getAwardByPostId(postId: string): Promise<any>;
    getAwardById(id: string): Promise<any>;
    addNewAward(awardData: Award, auth: string): Promise<any>;
    updateAward(awardData: Award, id: string, auth: string): Promise<any>;
    deleteAward(id: string, auth: string): Promise<any>;
}
