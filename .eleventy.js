const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy({
    'src/style/main.css': 'main.css',
    'src/images' :  '/images'
  });
  return {
    dir: {
      input: 'views',
      output: 'docs'
    }
  }
}