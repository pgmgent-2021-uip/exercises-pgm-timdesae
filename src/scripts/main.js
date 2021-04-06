(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.generateButtonBackToTop();
    },
    cacheElements() {
      this.$backToTopBtn = document.querySelector('.to-top-btn');
      console.log(this.$backToTopBtn);
    },
    generateButtonBackToTop() {
      var rootElement = document.documentElement
      this.$backToTopBtn.addEventListener('click', (event) => {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
      });
    },
  };
  app.initialize();
})()