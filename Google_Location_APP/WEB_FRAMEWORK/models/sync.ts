import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number; // We have to tell TS that the type generic
  // will have a defined id property that is a number
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  public fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  public save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      // PUT
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // POST
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}
