const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "layouts", "styles")],
  },
};

module.exports = nextConfig;
