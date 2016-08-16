export class MainController {
  constructor (bannersService) {
    'ngInject';

    this.bannersService = bannersService;
    this.onInit();
  }

  onInit(){
    this.banners = this.bannersService.banners;
  }
}
