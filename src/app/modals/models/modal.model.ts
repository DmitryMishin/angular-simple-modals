import {EventEmitter} from "@angular/core";
import {ModalEventModel} from "./modal-event.model";

export interface ModalModel {
  open(): void;
  close(): void;

  onAnimation$?: EventEmitter<ModalEventModel>;
  id: string;
}
