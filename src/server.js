const express = require("express");
const plugins = require("./plugins");
const routers = require("./routes");
const alias = require("module-alias/register");
const app = express();
app.use(plugins.cors());
app.use((_, res, next) => {
  res.setHeader(
    "Cache-Control",
    "public, max-age=0, s-maxage=86400, stale-while-revalidate"
  );
  next();
});

const port = process.env.APP_PORT || 3000;

routers.api(app);

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
module.exports = app;
