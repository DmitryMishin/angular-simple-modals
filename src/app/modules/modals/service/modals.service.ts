import {EventEmitter, Injectable} from '@angular/core';
import {ModalModel} from "../models/modal.model";
import {ModalEventModel} from "../models/modal-event.model";
import {ModalStoreModel} from "../models/modal-store.model";

@Injectable()
export class ModalsService {
  private modals: ModalStoreModel[] = [];

  public readonly onAnimation$: EventEmitter<ModalEventModel> = new EventEmitter();

  private findModal(id: string) {
    const storeItem = this.modals.find(({ modal }) => modal.id === id);

    if (!storeItem) {
      console.warn('Modal does not exists');
    }

    return storeItem;
  }

  public open(id: string) {
    const storeItem = this.findModal(id);

    storeItem && storeItem.modal.open();
  }

  public close(id: string) {
    const storeItem = this.findModal(id);

    storeItem && storeItem.modal.close();
  }

  public register(modal: ModalModel) {
    const subscription = modal.onAnimation$.subscribe((params) => {
      this.onAnimation$.emit(params);
    });

    this.modals.push({ modal, subscription });
  }

  public remove(modal: ModalModel) {
    const index = this.modals.findIndex(item => item.modal === modal);

    if (index === -1) {
      console.warn('Modal does not exists');
    } else {
      const storeItem = this.modals[index];

      storeItem.subscription.unsubscribe();

      this.modals.splice(index, 1);
    }
  }
}
