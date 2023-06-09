const BaseModel = require("./BaseModel");


/**
 * 
 * @date 09/06/2023 - 11:02:59
 *
 * @class ProductModel
 * @typedef {ProductModel}
 * @extends {BaseModel}
 */
class ProductModel extends BaseModel {

    
    /**
     * Creates an instance of ProductModel.
     * @date 09/06/2023 - 11:03:16
     *
     * @constructor
     */
    constructor() {
        super('products p');

        this.fieldsMapping = {
            "id": [`p.id`],
            "category": [`p.email`],
            "description": [`p.description`],
            "image": [`p.image`],
            "price": [`p.price`],
            "title": [`p.title`],
        }
    }
}

module.exports = ProductModel;