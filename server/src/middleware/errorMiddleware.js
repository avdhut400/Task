// const errorHandler = (err, req, res, next) => {
//   let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//   let message = err.message;

//   if (err.name === "CastError") {
//     statusCode = 404;
//     message = "Resource not found";
//   }

//   if (err.code === 11000) {
//     statusCode = 400;
//     message = "Duplicate field value entered";
//   }

//   res.status(statusCode).json({
//     message,
//     stack: process.env.NODE_ENV === "production" ? null : err.stack
//   });
// };

// module.exports = { errorHandler };

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError") {
    statusCode = 404;
    message = "Resource not found";
  }

  if (err.code === 11000) {
    statusCode = 400;
    
    // कोणतं field duplicate आहे ते शोधा
    const field = Object.keys(err.keyPattern)[0];
    const value = err.keyValue[field];
    
    if (field === "email") {
      message = `Email "${value}" is already registered. Please use a different email.`;
    } else {
      message = `${field} "${value}" already exists.`;
    }
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack
  });
};

module.exports = { errorHandler };