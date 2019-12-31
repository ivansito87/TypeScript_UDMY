import "reflect-metadata";

@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrrrrrr");
  }
}

function get(path: string) {
  return function(target: Plane, key: string) {
    // @ts-ignore
    Reflect.defineMetadata("path", path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    // @ts-ignore
    const path = Reflect.getMetadata("path", target.prototype, key);
    // @ts-ignore
    const middleware = Reflect.getMetadata("middleware", target.prototype, key);

    // @ts-ignore
    router.get(path, middleware, target.prototype[key]);
  }
}
