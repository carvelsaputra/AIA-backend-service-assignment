const express = require("express");
const plugins = require("./plugins");
const routers = require("./routes");
const alias = require("module-alias/register");
const app = express();
app.use(plugins.cors());

const port = process.env.APP_PORT;

routers.api(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
