class TemperatureController {
  $onInit() {
    this.listeTemperature = [{
      temperature: 12,
      date: Date.now(),
    },
    {
      temperature: 12,
      date: Date.now(),
    },
    {
      temperature: 12,
      date: Date.now(),
    }];
  }

  ajouterTemperature(data) {
    this.listeTemperature.push(data);
  }
}

export default TemperatureController;
