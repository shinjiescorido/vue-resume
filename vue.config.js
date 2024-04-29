/**
 * Imports the `defineConfig` function from the `@vue/cli-service` package.
 */
const { defineConfig } = require('@vue/cli-service');

/**
 * Exports the configuration object for Vue CLI.
 * 
 * @returns {Object} The Vue CLI configuration object.
 */
module.exports = defineConfig({
  /**
   * Enables transpilation of dependencies for broader browser compatibility.
   */
  transpileDependencies: true,
  /**
   * Configuration options for CSS processing.
   * (Replace "... other css options" with actual configuration if needed)
   */
  css: {
    // ... other css options
    /**
     * Loader options for specific CSS preprocessors.
     */
    loaderOptions: {
      /**
       * Options for the Sass loader.
       */
      sass: {
        /**
         * Injects additional data (SCSS imports) before Sass compilation.
         * Imports the main SCSS file (`main.scss`) from the assets directory.
         */
        additionalData: `@import "@/assets/styles/main.scss";`,
      },
    },
  },
});
