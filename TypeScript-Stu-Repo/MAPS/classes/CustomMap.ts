import { MarkerInterface } from "./CustomMap.interface";

export class CustomMap {
  // this will only be an instance of the map class
  private googleMap: google.maps.Map;

  constructor(elememtId: string) {
    // The we need to create the app by creating a new instance of the class
    // then we need to pass in the options which is an object {opt1: "value", opt2: "other value"}
    this.googleMap = new google.maps.Map(document.getElementById(elememtId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  public handleMarker(markerArg: MarkerInterface) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: markerArg.location.lat,
        lng: markerArg.location.lng
      }
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: markerArg.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
