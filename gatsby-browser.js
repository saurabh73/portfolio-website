/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/style.scss";

export const onInitialClientRender = () => {
  setTimeout(function() {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    document.getElementById("___loader").style.display = "none";
  }, 1000);
};
