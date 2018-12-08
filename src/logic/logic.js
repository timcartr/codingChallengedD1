const axios = require('axios');

const logic = {
  toggle(value) {
    return !value
  },
  getUsers(){
    return axios.get('https://uinames.com/api/?amount=6&ext&region=united%20states')
  }
}

module.exports = logic