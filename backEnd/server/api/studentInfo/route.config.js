
exports.routesConfig = function (app) {

  app.get("/", (req, res) => {
      let a = "<h1>Hi<h1>";
      return res.send(a);
   });

}
