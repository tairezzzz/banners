describe('service banner', () => {
  beforeEach(angular.mock.module('banners'));

  it('should be registered', inject(banner => {
    expect(banner).not.toEqual(null);
  }));

  describe('getBanners function', () => {
    it('should exist', inject(banner => {
      expect(banner.getBanners).not.toBeNull();
    }));

    it('should return array of object', inject(banner => {
      const data = banner.getBanners();
      expect(data).toEqual(jasmine.any(Array));
      expect(data[0]).toEqual(jasmine.any(Object));
      expect(data.length > 5).toBeTruthy();
    }));
  });
});
