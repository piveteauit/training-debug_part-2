const { FieldMapping } = require("../class");
const BaseModel = require("./BaseModel");


/**
 * 
 * @date 09/06/2023 - 11:03:22
 *
 * @class UserModel
 * @typedef {UserModel}
 * @extends {BaseModel}
 */
class UserModel extends BaseModel {

    
    /**
     * 
     * @date 09/06/2023 - 11:03:26
     *
     * @type {*}
     */
    fieldsMapping;

    
    /**
     * Creates an instance of UserModel.
     * @date 09/06/2023 - 11:03:30
     *
     * @constructor
     */
    constructor() {
        super('users u');

        this.fieldsMapping = {
            "id": [`u.id`],
            "email": [`u.email`],
            "username": [`u.username`],
            "role": [
                `r.label as role`,
                new FieldMapping('roles', 'r', 'r.id = u.role_id')
            ],
        }
    }

    getUserCart(user_id) {
        return this.db.query(
        `SELECT product_id, quantity FROM carts WHERE user_id = ?`,
        [user_id]);
    }
}

module.exports = UserModel;