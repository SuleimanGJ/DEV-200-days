export function logger(req, res, next) {
  console.log(
    `Request Received: ${req.method} - ${req.url} - ${new Date().toISOString()}`,
  );
  next()
}
