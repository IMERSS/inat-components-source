const path = require("path");
const generate = require("@imerss/inat-components-utils");
const config = require("./inat.config.json");

(async () => {
    const folder = path.resolve(__dirname, "./files");
    await generate.default(config, folder);
})();
