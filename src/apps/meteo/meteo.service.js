class MeteoService {
  constructor($q) {
    this.$q = $q;
    this.data = [];
  }

  addTemperature(data) {
    const deffered = this.$q.defer();

    this.data.push(data);
    deffered.resolve(this.data);
    
    return deffered.promise;
  }
}

MeteoService.$inject = [
  '$q',
];

export default MeteoService;
