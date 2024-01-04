import appConfig from "./config/app.config";
import app from "./config/express.config";

app.listen(appConfig.PORT, (): void => {
  console.log("SERVER IS UP ON PORT:", appConfig.PORT);
});
