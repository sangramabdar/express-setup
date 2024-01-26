import environmentConfig from "./config/environment.config";
import app from "./config/express.config";

console.log(environmentConfig);

app.listen(environmentConfig.PORT, (): void => {
  console.log("SERVER IS UP ON PORT:", environmentConfig.PORT);
});
