const { FieldMapping } = require("../class");
const BaseModel = require("./BaseModel");


/**
 * 
 * @date 09/06/2023 - 11:02:48
 *
 * @class CartModel
 * @typedef {CartModel}
 * @extends {BaseModel}
 */
class CartModel extends BaseModel {

    
    /**
     * Creates an instance of CartModel.
     * @date 09/06/2023 - 11:02:52
     *
     * @constructor
     */
    constructor() {
        super('carts c');

        this.fieldsMapping = {
            "id": [`c.id`],
            "quantity": [`c.quantity`],
            "products": [
                `p.category as product_category, p.title as product_title, p.price as product_price, p.image as product_image`,                
                new FieldMapping('products',  'p', 'p.id = c.product_id')
            ],
        }
    }

    /**
     * 
     * @date 26/06/2023 - 23:11:40
     *
     * @param {*} payload
     * @returns {*}
     */
    create(payload) {
        return this.db.query(
            `INSERT INTO ${this.rawTable} (product_id, quantity, user_id) VALUES (?, ?, ?)`,
            Object.values(payload)
        )
    }

    update(payload, id) {
        return this.db.query(
            `UPDATE ${this.rawTable} SET quantity = ? WHERE id = ?`,
            [payload?.quantity, id]
        )
    }
}

module.exports = CartModel;