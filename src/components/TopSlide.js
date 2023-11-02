import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination]);

const TopSlide = () => {
  return (
    <>
    <Swiper    
       modules={[Pagination, Navigation]}
       pagination={{ clickable: true }}
       navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        768: {
          slidesPerView: 1,
        },
        1024: {
            slidesPerView: 6,
          }
      }}
      slidesPerView={1}
      >
        <SwiperSlide>
          <div className="item">
            <img
              src="images/survey_img03.jpg"
              width={640}
              height={480}
              alt=""
            />
            <p>〇〇付近で合流、2人は徒歩にて移動。</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
            <img
              src="images/survey_img04.jpg"
              width={640}
              height={480}
              alt=""
            />
            <p>その後、19時09分、ラブホテル〇〇へと入るのを確認する。</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
            <img
              src="images/survey_img05.jpg"
              width={640}
              height={480}
              alt=""
            />
            <p>21時11分、同2人は同ホテルより出るのを確認する。</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
            <img
              src="images/survey_img06.jpg"
              width={640}
              height={480}
              alt=""
            />
            <p>一般のカメラで撮影した時。</p>
          </div>
          </SwiperSlide>
        <SwiperSlide className='item pc'>
          <div className="item">
            <img
              src="images/survey_img07.jpg"
              width={640}
              height={480}
              alt=""
            />
            <p>弊社の高感度カメラで撮影した時。</p>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img
              src="images/survey_img08.jpg"
              width={640}
              height={480}
              alt=""
            />
            <p>〇〇へ移動し同所にて別々に別れた為、相手の帰宅先を割り出す。</p>
          </div>
          </SwiperSlide>
      </Swiper>
      
    </>
  )
}

export default TopSlide
