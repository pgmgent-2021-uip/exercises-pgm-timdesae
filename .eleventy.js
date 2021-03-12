module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'src/main.css': 'main.css',
    'src/images' :  '/images'
  });
  return {
    dir: {
      input: 'views',
      output: 'docs'
    }
  }
}