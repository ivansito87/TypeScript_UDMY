export class CustomMap {
  // this will only be an instance of the map class
  private googleMap: google.maps.Map;

  constructor(elememtId: string) {
    // The we need to create the app by creating a new instance of the class
    // then we need to pass in the options which is an object {opt1: "value", opt2: "other value"}
    this.googleMap = new google.maps.Map(document.getElementById(elememtId), {
      zoom: 10,
      center: {
        lat: 33.880199,
        lng: -84.512627
      }
    });
  }
}
