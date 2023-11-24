import React, { useLayoutEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CatchTxt = () => {
  const [deviceType, setDeviceType] = useState('');

  useLayoutEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width > 1024) {
        setDeviceType('desktop');
      } else if (width <= 1024 && width > 600) {
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
      desktopImage: file(relativePath: { eq: "m_copy01.png" }) {
        childImageSharp {
          gatsbyImageData(width: 850, layout: CONSTRAINED)
        }
      }
      tabletImage: file(relativePath: { eq: "m_copy01_tub.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      mobileImage: file(relativePath: { eq: "m_copy01_smp.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, layout: CONSTRAINED)
        }
      }
      pcEmbrem: file(relativePath: { eq: "emblem_01.png" }) {
        childImageSharp {
          gatsbyImageData(width: 640, layout: CONSTRAINED)
        }
      }
      tubEmbrem: file(relativePath: { eq: "emblem_tub.png" }) {
        childImageSharp {
          gatsbyImageData(width: 370, layout: CONSTRAINED)
        }
      }
      mobileEmbrem: file(relativePath: { eq: "emblem_01_smp.png" }) {
        childImageSharp {
          gatsbyImageData(width: 220, layout: CONSTRAINED)
        }
      }
    }
  `);

  const desktopImage = getImage(data.desktopImage);
  const tabletImage = getImage(data.tabletImage);
  const mobileImage = getImage(data.mobileImage);
  const pcEmbrem = getImage(data.pcEmbrem);
  const tubEmbrem = getImage(data.tubEmbrem);
  const mobileEmbrem = getImage(data.mobileEmbrem);

  return (
    <div className='catch_txt'>
      {deviceType === 'desktop' && (
        <>
          <GatsbyImage image={pcEmbrem} className='emblem' alt='' />

          <h3 className='m_copy'>
            <GatsbyImage image={desktopImage} alt='Desktop Image' />
          </h3>
        </>
      )}
      {deviceType === 'tablet' && (
        <>
          <GatsbyImage image={tubEmbrem} className='emblem' alt='' />

          <h3 className='m_copy'>
            <GatsbyImage image={tabletImage} alt='Tablet Image' />
          </h3>
        </>
      )}
      {deviceType === 'mobile' && (
        <>
          <GatsbyImage className='emblem emb_s' image={mobileEmbrem} alt='' />

          <h3 className='m_copy'>
            <GatsbyImage image={mobileImage} alt='Mobile Image' />
          </h3>
        </>
      )}
    </div>
  );
};

export default CatchTxt;
