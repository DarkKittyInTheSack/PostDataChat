import { Interact } from "src/model/Interact";
import { InteractService } from "src/service/InteractService";
export declare class InteractController {
    private interactService;
    constructor(interactService: InteractService);
    getInteractById(id: string): Promise<string>;
    addNewInteract(interactData: Interact, auth: string): Promise<string>;
    updateInteract(id: string, interactData: Interact, auth: string): Promise<string>;
    deleteInteract(req: Request, id: string, auth: string): Promise<string>;
}
