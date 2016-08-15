export class BannersController {
    constructor (bannersService) {
        'ngInject';

        this.bannersService = bannersService;
        //this.onInit();
    }

    $onInit(){
        //this.banners = this.bannersService.banners;
        this.message = this.bannersService.message;
        //this.banners = this.bannersService.getBanners();
        this.banner = {};
        this.showBan = false;
        this.showForm = false;
        this.bn = {};
    }

    showBanner(banner){
        this.banner=banner;
        this.showBan = true;
        this.showForm = false;
    }

    show(){
        this.showBan = false;
        this.showForm = true;
    }

    addBnr(banner){
        banner.url = 'banners/' + banner.companyName + '_' + banner.width + 'x' + banner.height + '/GC.html';
        //this.bn = banner;
        this.bannersService
            .addBanner(banner)
            .then((response)=>{
                banner.url = banner.companyName = banner.width = banner.height = '';
                //this.message = 'Баннер успешно добавлен.';
                this.message = '';
                this.showForm = false;
            }).catch((response)=>{
                this.message = 'Непредвиденная ошибка';
            });
    }
}
