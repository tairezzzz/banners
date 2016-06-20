export class MainController {
  constructor (bannersService) {
    'ngInject';

    this.bannersService = bannersService;
    this.onInit();
  }

  onInit(){
    this.bannersServ = this.bannersService;
    this.banners = this.bannersService.banners;
    this.banner = {};
    this.showBan = false;

    this.awesomeThings = [];
    this.classAnimation = '';
    this.info = [];
    this.creationDate = '1';
  }

  showBanner(banner){
    this.banner=banner;
    this.showBan = true;

  }
}
