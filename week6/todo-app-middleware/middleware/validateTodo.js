export function validateTodo(req, res, next) {
  const { title } = req.body;

  if(!title){
    return res.status(400).json({
      message: "Title is required",
    });
  }
  next()
}