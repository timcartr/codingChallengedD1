const axios = require('axios');

const logic = {
  toggle(value) {
    return !value
  },
  getProducts(){
    return axios.get('https://uinames.com/api/?amount=12&ext&region=united%20states')
  }
}

module.exports = logic