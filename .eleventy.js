const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function (eleventyConfig) {
  
  /* Plugins */
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  /* Filters */
  eleventyConfig.addFilter('highlighted', function(blogs) {
    return blogs.filter(article => article.data.highlighted == true);
  });

  eleventyConfig.addFilter('coverFilter', function(blogs) {
    return blogs.filter(article => article.data.highlighted == true);
  });

  /* Pass through files  */
  eleventyConfig.addPassthroughCopy({
    'src/main.css':'/assets/main.css',
    'src/images': '/images'
  });
  return {
    dir: {
      input: 'views',
      output: 'docs'
    }
  }
}