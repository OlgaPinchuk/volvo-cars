const ENDPOINT = "api/cars.json";

const API = {
  path: ENDPOINT,
  async getData(onSuccess, onError) {
    try {
      const data = await fetch(this.path);
      onSuccess(data.json());
    } catch (e) {
      onError(e);
    }
  },
};

export default API;
