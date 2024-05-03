import { Award } from "src/model/Award";
import { AwardService } from "src/service/AwardService";
export declare class AwardController {
    private awardService;
    constructor(awardService: AwardService);
    getAwardById(id: string): Promise<string>;
    getAwardByUserId(id: string): Promise<string>;
    getAwardByPostId(id: string): Promise<string>;
    addAward(awardData: Award, auth: string): Promise<string>;
    updateAward(id: string, awardData: Award, auth: string): Promise<string>;
    deleteAward(id: string, auth: string): Promise<string>;
}
