import React, { useLayoutEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const MainimageBg = () => {
  const [deviceType, setDeviceType] = useState('');

  useLayoutEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width > 1280) {
        setDeviceType('desktop');
      } else if (width <= 1280 && width > 768) {
        setDeviceType('desktop_s');
      } else if (width <= 768 && width > 600) {
        setDeviceType('tablet');
      } else {
        setDeviceType('mobile');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const data = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "mainimage.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 1903, layout: CONSTRAINED)
        }
      }
      desktopsImage: file(relativePath: { eq: "mainimage_s.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 1280, layout: CONSTRAINED)
        }
      }
      tabletImage: file(relativePath: { eq: "mainimage_tub.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 1024, layout: CONSTRAINED)
        }
      }
      mobileImage: file(relativePath: { eq: "mainimage_smp.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 414, layout: CONSTRAINED)
        }
      }
    }
  `);

  const desktopImage = getImage(data.desktopImage);
  const desktopsImage = getImage(data.desktopsImage);
  const tabletImage = getImage(data.tabletImage);
  const mobileImage = getImage(data.mobileImage);

  return (
    <>
      {deviceType === 'desktop' && <GatsbyImage className='mainimage_bg' image={desktopImage} alt='Desktop Image' />}
      {deviceType === 'desktop_s' && <GatsbyImage className='mainimage_bg' image={desktopsImage} alt='Desktop Image' />}
      {deviceType === 'tablet' && <GatsbyImage className='mainimage_bg' image={tabletImage} alt='Tablet Image' />}
      {deviceType === 'mobile' && <GatsbyImage className='mainimage_bg' image={mobileImage} alt='Mobile Image' />}
    </>
  );
};

export default MainimageBg;
