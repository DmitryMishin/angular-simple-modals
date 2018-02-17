import {ModalModel} from "./modal.model";
import {Subscriber} from "rxjs/Subscriber";

export interface ModalStoreModel {
  modal: ModalModel;
  subscription: Subscriber<any>;
}
