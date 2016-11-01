class AjouterTemperatureController {
  constructor(meteoService) {
    this.meteoService = meteoService;
    this.ajouterTemperature = null;
  }

  submit(form) {
    if (form.$valid) {
      this.meteoService
        .addTemperature({
          temperature: this.ajouterTemperature,
          date: Date.now(),
        })
        .then(() => {
          this.ajouterTemperature = null;
          form.$setPristine(false);
        })
        .catch()
        .always();
    }
  }
}

AjouterTemperatureController.$inject = [
  'meteoService',
];

export default AjouterTemperatureController;
