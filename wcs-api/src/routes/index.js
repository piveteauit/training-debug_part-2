module.exports = function(router) {
    router.use("/products", require("./productRoutes"));
    router.use("/users", require("./userRoutes"));
    router.use("/carts", require("./cartRoutes"));
}