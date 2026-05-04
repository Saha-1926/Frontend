import "slick-carousel/slick/slick-theme.css";
import { useAppSelector } from "../../../../State/Store";
// import Slider from "react-slick";
import DealCard from "./DealCard";

const Deal = () => {
  const { customer } = useAppSelector(store => store);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className='py-5 lg:px-20'>
      <div className='flex items-center justify-between'>
        {customer.homePageData?.deals.slice(0,4).map((item) => (
          <DealCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Deal;