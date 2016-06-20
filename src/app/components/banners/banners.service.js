export class BannersService {
  constructor ($resource, $http) {
    'ngInject';

    this.$http = $http;
    this.banners = {};
    this.onInit();
  }

  onInit(){
    this.getBanners();
  }

  getBanners() {
    return this.$http.get('banners.json')
      .success((response) => {

        // this.banners = response;

        angular.copy(response, this.banners);
        return response;
    });
  }
}
