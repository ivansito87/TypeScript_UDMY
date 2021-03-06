import { Company } from "../classes/Company";
import { CustomMap } from "../classes/CustomMap";
import { User } from "../classes/User";

// constructor from user takes number as argument if 3 < returns female
const female = new User(0);
const male = new User(1);
const company = new Company();
// console.log(company);
// console.log(male);
// console.log(female);

const customMap = new CustomMap("map");

const maleMarker = customMap.handleMarker(male);
const femaleMarker = customMap.handleMarker(female);
const companyMarker = customMap.handleMarker(company);

// console.log(customMap);
