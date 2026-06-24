export function validateTodo(req, res, next) {
  // check req.body.title
  const {title} = req.title;

  if(!title){
    return res.status(400).json({
      message: "Title is required",
    });
  }
  next()
}