export class BannersService {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
    this.banners = {};
    this.onInit();
    this.message = '';
  }

  onInit(){

    this.$http.get('banners.json')
      .then((response)=>{

        angular.copy(response.data, this.banners)

        //console.log(this.banners);
      });



    // this.$http.get('banners.json')
    //   .success((response) => {
    //
    //     // this.banners = response;
    //
    //     angular.copy(response, this.banners);
    //     //return response;
    //   });
  }

  addBanner(data){
    let company = data.companyName;
    if (typeof this.banners[company] == 'object')
      this.banners[company].push(data);
    else
      this.banners[company] = data;

    this.$http.post('banners.json', this.banners)
      .then((response) => {
        this.message = 'Баннер успешно добавлен.'
      });
  }
}
