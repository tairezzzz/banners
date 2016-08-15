import {BannersController} from './banners.controller';

export let BannersComponent = {
  templateUrl: 'app/components/banners/banners.html',
  controller: BannersController,
  //controllerAs: 'vm',
  bindings: {
    banners: '<'
  }
}