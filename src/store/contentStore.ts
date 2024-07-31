import { autorun, makeAutoObservable } from "mobx";

class Content {
  name: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setName(name: string) {
    this.name = name;
  }
  clearName() {
    this.name = "";
  }
}

export const contentStore = new Content();
autorun(() => {
  console.log({ name: contentStore.name });
});
