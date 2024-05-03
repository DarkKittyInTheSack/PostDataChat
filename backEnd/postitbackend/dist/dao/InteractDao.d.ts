import { Interact } from "src/model/Interact";
export interface InteractDao {
    getInteract(id: string): Promise<any>;
    addNewInteract(interactData: Interact, auth: string): Promise<any>;
    updateCurrentInteract(interactData: Interact, id: string, auth: string): Promise<any>;
    deleteInteract(id: string, auth: string): Promise<any>;
}
