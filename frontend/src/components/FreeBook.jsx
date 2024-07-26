import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
export default function FreeBook() {
    const filterData=list.filter((data)=>
        data.category==="Free");
    console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
   <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div>
    <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum quos nihil facilis. Ut, ab nihil sit soluta dolor voluptas voluptate similique esse nostrum rerum laudantium expedita magni consequuntur nam.</p>
    </div>
      <div>
      <Slider {...settings}>
        {filterData.map((item)=>
        (
            <Cards item={item} key={item.id} />
        ))}
      </Slider>
      </div>
      </div>
   </>
  )
}
