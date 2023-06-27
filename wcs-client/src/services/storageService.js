
/**
 * 
 * @date 26/06/2023 - 20:08:28
 *
 * @type {{ setItem(key: string, data: string): any; getItem(key: string): any; }}
 */
const storageService = {
  
  /**
   * 
   * @date 26/06/2023 - 20:08:04
   *
   * @param {string} key
   * @param {string} data
   * @returns {*}
   */
  setItem(key, data) {
    return localStorage.setItem(key, JSON.stringify(data));
  },
  
  /**
   * 
   * @date 26/06/2023 - 20:08:15
   *
   * @param {string} key
   * @returns {*}
   */
  getItem(key) {
    const data = localStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  },
};
export default storageService;
