import Api from "./Api";

export default {
  createPhase(credentials) {
    return Api().post("createPhas", credentials);
  }
};
