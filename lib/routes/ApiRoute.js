const logger = require("winston");
const CssRouter = require("../routers/CssRouter");
const HtmlRouter = require("../routers/HtmlRouter");
const JsRouter = require("../routers/JsRouter");
const ImageRouter = require("../routers/ImageRouter");

module.exports = function(app) {

  const API_ENDPOINT = "/api/minify";

  app.post(API_ENDPOINT, function(req, res, next) {
    logger.info("Recebendo POST");

    if(checkCSSContent(req)) {
      req.url = req.url + "/css";
    } else if (checkHTMLContent(req)) {
      req.url =  req.url + "/html";
    } else if (checkJSContent(req)) {
      req.url = req.url + "/js";
    } else if(checkImageContent(req)) {
      req.url = req.url +  "/image";
    } else {
      let msg = "Tipo de conteúdo recebido é inválido " + req.get("Content-Type");
      logger.warn(msg);
      return res.status(400).send(msg);
    }

    logger.info("Redirecionando a rota para " + req.url);

    next();
  });

  app.use(API_ENDPOINT, CssRouter);
  app.use(API_ENDPOINT, HtmlRouter);
  app.use(API_ENDPOINT, JsRouter);
  app.use(API_ENDPOINT, ImageRouter);

  function checkCSSContent(req) {
    return checkContentType(req, "text/css");
  }

  function checkJSContent(req) {
    return checkContentType(req, "text/javascript");
  }

  function checkHTMLContent(req) {
    return checkContentType(req, "text/html");
  }

  function checkImageContent(req) {
    return checkContentType(req, "image/jpeg", "image/png");
  }

  function checkContentType(req, ...contentType) {
    return contentType.includes(req.get("Content-Type"));
  }

}