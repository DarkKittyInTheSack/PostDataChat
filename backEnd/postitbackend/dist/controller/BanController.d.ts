import { Ban } from "src/model/Ban";
import { BanService } from "src/service/BanService";
export declare class BanController {
    private banService;
    constructor(banService: BanService);
    getBanById(id: string): Promise<string>;
    getBanByUserId(id: string): Promise<string>;
    getBanByPostId(id: string): Promise<string>;
    addNewBan(banData: Ban, auth: string): Promise<string>;
    updateCurrentBan(id: string, banData: Ban, auth: string): Promise<string>;
    deleteBan(id: string, auth: string): Promise<string>;
}
