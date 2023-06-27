const jwt = require('jsonwebtoken');
const { UserModel, CartModel } = require("../models");
const BaseController = require("./BaseController");
const { jwtSecret } = require('../config');

/**
 * 
 * @date 09/06/2023 - 11:01:25
 *
 * @class UserController
 * @typedef {UserController}
 * @extends {BaseController}
 */
class UserController extends BaseController {

    /**
     * Creates an instance of UserController.
     * @date 09/06/2023 - 11:01:32
     *
     * @constructor
     * @param {*} req
     * @param {*} res
     */
    constructor(req, res) {
        super(req, res, UserModel);
    }

    /**
     * 
     * @date 26/06/2023 - 20:31:45
     *
     * @returns {*}
     */
    getUserCart() {
        return this.model.getUserCart(this.req.params.user_id)
            .then(([results]) => this.sendJson(results))
            .catch(this.handleError.bind(this))
    }
    
    /**
     * 
     * @date 27/06/2023 - 10:45:30
     *
     * @returns {*}
     */
    async getUserOrders() {
        try {
            const [userOrders] = await this.model.getUserOrders(this.req.params.user_id)
            this.sendJson(
                userOrders.reduce((acc, {ref, status, ...product }) => {
                    const currentOrder = acc.find((cur) => cur.ref === ref) || {ref, price: 0, status, products: []};
                    const currentOrderIndex = acc.indexOf(currentOrder);
                    currentOrder.products.push(product)
                    currentOrder.price += Number(product.price)

                    if (~currentOrderIndex) acc[currentOrderIndex] = currentOrder;
                    else acc.push(currentOrder);

                    return acc;
                }, [])
            );
        } catch (e) {
            this.handleError(e);
        }
    }
    
    /**
     * 
     * @date 26/06/2023 - 20:31:50
     *
     * @returns {*}
     */
    authUser() {
        this.model.fields = ["id", "email", "username", "role"];

        return this.model.authUser(this.req.body)
            .then(([results]) => results[0])
            .then((user) => {
                if (!user) throw new Error("User not found");
                this.res.cookie("access_token", jwt.sign(user, jwtSecret, {expiresIn: "1d"}))
                this.sendJson(user)
            })
            .catch(this.handleError.bind(this))
    }
    
    /**
     * 
     * @date 26/06/2023 - 21:32:11
     *
     * @returns {*}
     */
    register() {
        return this.model.create(this.req.body)
            .then(([result]) => {
                delete this.req.body.password;
                return {
                    id: result.insertedId,
                    ...this.req.body,
                }
            })
            .then((user) => {
                this.res.cookie("access_token", jwt.sign(user, jwtSecret, {expiresIn: "1d"}))
                return user;
            })
            .then(this.sendJson.bind(this))
            .catch(this.handleError.bind(this));
    }

    addCart() {
        return new CartModel()
            .create({...this.req.body, user_id: this.req.params.user_id})
            .then(([result]) => ({
                product_id: this.req.body?.product_id,
                quantity: this.req.body?.quantity,
                cart_id: result?.insertedId,
            }))
            .then(this.sendJson.bind(this))
            .catch(this.handleError.bind(this));
    }

    updateCart() {
        return new CartModel()
            .update(this.req.body, this.req.params.cart_id)
            .then(([result]) => ({
                ...this.req.body,
                cart_id: this.req.params.cart_id,
            }))
            .then(this.sendJson.bind(this))
            .catch(this.handleError.bind(this));
    }
}

module.exports = UserController;