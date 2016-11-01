describe('App meteo', () => {
  let scope;
  let $meteoService;

  beforeEach(() => {
    angular.mock.module('meteo');

    angular.mock.inject((_$meteoService_) => {
      $meteoService = _$meteoService_;
    });
  });

  it('should be defined', () => {
    expect($meteoService).toBeDefined();
  });

  describe('addTemperature', () => {
    it('should add an object to the data property', () => {
      const data = {
        temperature: 123,
        date: Date.now(),
      };

      $meteoService.addTemperature(data);
      expect($meteoService.data).to.equal([data]);
    });
  });
});