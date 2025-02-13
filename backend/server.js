const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 7000;

app.use(cors())

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Success you have reached to the Root Route.",
  });
});

app.get("/calculate", (req, res) => {
  const val1 = req.query.a;
  const val2 = req.query.b;
  const opr = req.query.opr;

  let result = "";
  switch (opr) {
    case "add":
      result = parseInt(val1) + parseInt(val2);
      break;

    case "sub":
      result = parseInt(val1) - parseInt(val2);
      break;
    case "mul":
      result = parseInt(val1) * parseInt(val2);
      break;

    case "div":
      if(parseInt(val2) === 0){
            result = "Divide by Zero error";
      }else{
            result = (parseInt(val1) / parseInt(val2)).toFixed(3).toString();
      }
      break;

    default:
      result = "Please send the valid operation";
  }

  res.status(200).json({
    result,
  });
});

app.listen(PORT, () => {
  console.log(`PORT is listening at http://127.0.0.1:${PORT}`);
});
