const { FieldMapping } = require("../class");
const BaseModel = require("./BaseModel");



/**
 * 
 * @date 27/06/2023 - 13:28:19
 *
 * @class OrderModel
 * @typedef {OrderModel}
 * @extends {BaseModel}
 */
class OrderModel extends BaseModel {
    
    /**
     * Creates an instance of CartModel.
     * @date 09/06/2023 - 11:02:52
     *
     * @constructor
     */
    constructor() {
        super('orders o');

        this.fieldsMapping = {
            "id": [`o.id`],
            "cart_id": [`o.cart_id`],
            "status": [
                `os.status as status`,                
                new FieldMapping('status',  'os', 'os.id = o.status')
            ],
        }
    }

    create(payload) {
        const order_num = `FA-${payload.join("")}`
        return Promise.all(
            payload.map((cart_id) => this.db.query(
                `INSERT INTO ${this.rawTable} (cart_id, order_num, status_id) VALUES (?, ?, 1)`,
                [cart_id, order_num])
        ));
    }

    update(payload, id) {
        return this.db.query(
            `UPDATE ${this.rawTable} SET quantity = ? WHERE id = ?`,
            [payload?.quantity, id]
        )
    }
}

module.exports = OrderModel;