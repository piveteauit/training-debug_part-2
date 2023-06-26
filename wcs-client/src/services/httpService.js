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
    return fetch(`${baseUrl}/${resource}`).then(getParsedResponse);
  },

  getById: function (resource, id) {
    return fetch(`${baseUrl}/${resource}/${id}`).then(getParsedResponse);
  },

  create: function (resource, body) {
    return fetch({
      method: "post",
      url: `${baseUrl}/${resource}`,
      body,
    })
    .then(getParsedResponse);
  },
};

export default httpService;
