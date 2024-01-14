import appConfig from "./config/app.config";
import app from "./config/express.config";

console.log(appConfig);

app.listen(appConfig.PORT, (): void => {
  console.log("SERVER IS UP ON PORT:", appConfig.PORT);
});
