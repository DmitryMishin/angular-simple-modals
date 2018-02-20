import {animate, state, style, transition, trigger} from '@angular/animations';

export const toggleModal = function () {
  return trigger('showHideModal', [
    state('void', style({opacity: 0})),
    state('*', style({opacity: 1})),

    transition('* => *', animate('{{ duration }}'))
  ]);
};
