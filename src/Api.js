import * as axios from "axios";

const Api = {
  getData (data) {
    let prom = axios.get(`https://social-network.samuraijs.com/api/1.0/${data}`)
      return prom.then(response => {
          return response.data;
      })
  }
}

export default Api;