export function logger(req, res, next) {
    console.log("Request received:", req.method, req.url, req.Date.now());
  next();
}
