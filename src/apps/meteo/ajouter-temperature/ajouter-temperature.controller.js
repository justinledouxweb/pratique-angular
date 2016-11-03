class AjouterTemperatureController {
  constructor(meteoService) {
    this.meteoService = meteoService;
    this.temperature = null;
  }

  submit(form) {
    if (form.$valid) {
      const data = {
        temperature: this.temperature,
        date: Date.now(),
      };

      this.ajouterTemperature({ data });

      this.temperature = null;
      form.$setPristine(false);

      // this.meteoService
      //   .addTemperature({
      //     temperature: this.ajouterTemperature,
      //     date: Date.now(),
      //   })
      //   .then(() => {
      //     this.ajouterTemperature = null;
      //     form.$setPristine(false);
      //   })
      //   .catch()
      //   .always();
    }
  }
}

AjouterTemperatureController.$inject = [
  'meteoService',
];

export default AjouterTemperatureController;
