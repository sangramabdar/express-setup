import { config, initializeEnvironment } from "./config/environment.config";

initializeEnvironment();

import app from "./config/express.config";

app.listen(config.PORT, (): void => {
  console.log("SERVER IS UP ON PORT:", config.PORT);
});
