
/**
 * 
 * @date 26/06/2023 - 20:07:22
 *
 * @type {string}
 */
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
 * @date 26/06/2023 - 20:07:07
 *
 * @type {{ getAll(resource: any): any; getById(resource: any, id: any): any; create(resource: any, body: any): any; update(resource: any, body: any): any; _get(url: string): any; _put(url: string, body: any): any; _post(url: string, body: any): any; }}
 */
const httpService = {
  
  /**
   * 
   * @date 26/06/2023 - 20:06:43
   *
   * @param {*} resource
   * @returns {*}
   */
  getAll(resource) {
    return this._get(`${baseUrl}/${resource}`);
  },
  
  
  /**
   * 
   * @date 26/06/2023 - 20:06:48
   *
   * @param {*} resource
   * @param {*} id
   * @returns {*}
   */
  getById(resource, id) {
    return this._get(`${baseUrl}/${resource}/${id}`);
  },

  
  /**
   * 
   * @date 26/06/2023 - 20:06:51
   *
   * @param {*} resource
   * @param {*} body
   * @returns {*}
   */
  create(resource, body) {
    return this._post(`${baseUrl}/${resource}`, body);
  },

  
  /**
   * 
   * @date 26/06/2023 - 20:06:56
   *
   * @param {*} resource
   * @param {*} body
   * @returns {*}
   */
  update(resource, body) {
    return this._put(`${baseUrl}/${resource}`, body);
  },
    
  /**
   * 
   * @date 26/06/2023 - 20:04:32
   *
   * @param {string} url
   * @returns {*}
   */
  _get(url) {
    return fetch(url, {credentials: 'same-origin'})
      .then(getParsedResponse)
      .catch(Promise.reject);
  },
  
  /**
   * 
   * @date 26/06/2023 - 20:04:37
   *
   * @param {string} url
   * @param {*} body
   * @returns {*}
   */
  _put(url, body) {
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(body || {}),
    })
    .then(getParsedResponse)
    .catch(Promise.reject);

  },

  
  /**
   * 
   * @date 26/06/2023 - 20:04:44
   *
   * @param {string} url
   * @param {*} body
   * @returns {*}
   */
  _post(url, body) {
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body || {}),
    })
    .then(getParsedResponse)
    .catch(Promise.reject);
  },
};

export default httpService;
