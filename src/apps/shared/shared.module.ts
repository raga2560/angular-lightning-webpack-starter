import { NgModule } from '@angular/core';
import { NglIconSvg } from 'ng-lightning/icons/svg';

import { NoContentComponent } from './no-content';

@NgModule({
  declarations: [
    NoContentComponent,
  ],
  exports: [
    NoContentComponent
  ]
})
export class SharedModule { }

/**
 * Override ng-lightnings NglIconSvg.iconPath() to work properly with dependency resolution
 */
// tslint:disable:max-line-length
NglIconSvg.prototype.iconPath = function() {
  switch (this.category) {
    case 'action':
      return `${require('../../../node_modules/@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg')}#${this.icon}`;
    case 'custom':
      return `${require('../../../node_modules/@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg')}#${this.icon}`;
    case 'doctype':
      return `${require('../../../node_modules/@salesforce-ux/design-system/assets/icons/doctype-sprite/svg/symbols.svg')}#${this.icon}`;
    case 'standard':
      return `${require('../../../node_modules/@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg')}#${this.icon}`;
    case 'utility':
    default:
      return `${require('../../../node_modules/@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg')}#${this.icon}`;
  }
};
// tslint:enable:max-line-length
