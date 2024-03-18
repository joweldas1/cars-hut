
import '../../commonDesigns/common.css'
const Banner = ({handToScroll}) => {
    return (
        <div>
            <div className='h-[80vh] w-full banner flex items-center md:items-center justify-center md:justify-end'>
        <div className="md:px-7">
        <h2 className='text-white text-center md:text-right text-3xl md:text-7xl my-0 shadow'>Discover  <br />Your Dream Ride</h2>
        <p className="text-base md:text-2xl text-white text-center md:text-right font-semibold">Explore diverse vehicles for every taste. Find your dream car now!</p>
        <div className="text-center md:text-right">
        <button className="button-common md:mr-10" onClick={handToScroll}>Feedback & Reviews</button> <br className="block md:hidden" />
        <button className="button-common mt-5 md:mt-0">See Our Collection</button>
        </div>
        </div>
</div>
        </div>
    );
};

export default Banner;