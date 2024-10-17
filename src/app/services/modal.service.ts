import {Injectable} from '@angular/core';
import {IModal} from "../shared/modal/interfaces/modal.interface";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = []

  constructor() {
  }

  register(id: string) {
    this.modals.push({
      id,
      visible: false
    })
  }

  isModalOpen(id: string) {
    return Boolean(this.modals.find((element) => element.id === id)?.visible)
  }

  toggleModal(id: string) {
    const modal = this.modals.find((element) => element.id === id)

    if (modal) {
      modal.visible = !modal.visible
    }
  }
}
