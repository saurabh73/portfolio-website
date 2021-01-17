/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
/* import "./src/styles/style.scss"; */
const transitionDelay = 100;

// export const onInitialClientRender = () => {
//   setTimeout(function () {
//     document.getElementsByTagName("body")[0].style.overflow = "auto";
//     document.getElementById("___loader").style.display = "none";
//   }, transitionDelay);
// };

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  console.log(location);
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    );
  }
  return false;
};