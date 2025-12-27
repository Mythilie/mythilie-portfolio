const images = import.meta.glob("../assets/images/**/*.{png,webp}", {
  eager: true,
});

const Images = {
  profile: images["../assets/images/global/profile.png"]?.default,
  bgImg: images["../assets/images/global/bgImg.png"]?.default,

  restapi: images["../assets/images/logo/api.png"]?.default,
  bootstrap: images["../assets/images/logo/bootstrap.webp"]?.default,
  css: images["../assets/images/logo/css.webp"]?.default,
  git: images["../assets/images/logo/git.webp"]?.default,
  github: images["../assets/images/logo/github.webp"]?.default,
  html: images["../assets/images/logo/html.webp"]?.default,
  js: images["../assets/images/logo/js.webp"]?.default,
  react: images["../assets/images/logo/react.webp"]?.default,
  redux: images["../assets/images/logo/redux.webp"]?.default,
  responsive: images["../assets/images/logo/resposiveness.webp"]?.default,
  tailwind: images["../assets/images/logo/tailwind.webp"]?.default,
  ts: images["../assets/images/logo/ts.webp"]?.default,
};

export default Images;
