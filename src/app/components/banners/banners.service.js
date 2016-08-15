export class BannersService {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
    this.onInit();
  }

  onInit(){
    this.banners = {};
    //this.message = '111';

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
    else {
      this.banners[company] = [data];
    }

    return this.$http.post('./banners.json', this.banners)
      .then((response) => {

      });
  }
}
