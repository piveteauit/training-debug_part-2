const baseUrl = "/api";


/**
 * 
 * @date 09/06/2023 - 11:21:39
 *
 * @param {*} r
 * @returns {*}
 */
function getParsedResponse(r) {
  return r.json();
}

/**
 * 
 * @date 09/06/2023 - 11:21:22
 *
 * @type {{ getAll: (resource: any) => any; getById: (resource: any, id: any) => any; create: (resource: any, body: any) => any; }}
 */
const httpService = {
  
  getAll: function (resource) {
    return this._get(`${baseUrl}/${resource}`);
  },

  getById: function (resource, id) {
    return this._get(`${baseUrl}/${resource}/${id}`);
  },

  create: function (resource, body) {
    return this._post(`${baseUrl}/${resource}`, body);
  },



  _get(url) {
    return fetch(url, {credentials: 'same-origin'}).then(getParsedResponse);
  },

  _post(url, body) {
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body || {}),
    }).then(getParsedResponse);
  },
};

export default httpService;
