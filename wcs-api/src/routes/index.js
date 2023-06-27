module.exports = /**
 * 
 * @date 26/06/2023 - 20:34:00
 *
 * @param {*} router
 */
function(router) {    
    router.use("/products", require("./productRoutes"));
    router.use("/users", require("./userRoutes"));
    router.use("/carts", require("./cartRoutes"));
    router.use("/orders", require("./orderRoutes"));
}