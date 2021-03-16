import axios from "axios";


const BASEURL = "https://randomuser.me/api/?results=50&nat=us";
// eslint-disable-next-line import/no-anonymous-default-export
const API = {

  getEmployees: function() {
    return axios.get(BASEURL);
  }
};

export default API;