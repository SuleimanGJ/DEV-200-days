export function logger(req, res, next) {
  // log method and url
    console.log("Request received:", req.method, req.url, req.Date.now());
  next();
}
