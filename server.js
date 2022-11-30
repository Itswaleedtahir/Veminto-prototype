const config = require("./config");
const app = require("./app.js");
// const port = config.get("port");


const Port_No=process.env.PORT || 5000

app.listen(Port_No, () => {
  console.log(`Server running on port: ${Port_No}`);
});
