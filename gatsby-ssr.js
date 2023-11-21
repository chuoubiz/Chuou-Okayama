/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

export const shouldUpdateScroll = () => {
  window.scrollTo(0, 0);
  return false;
};
