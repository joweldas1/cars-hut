
const CarsShow = ({cars,handleToBuy }) => {
    const shadow={
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    }
    const small={
        fontWeight:'',
        fontSize:'15px',
        color:'black',


    }
    const{img,name,title,rating,overview,price}=cars;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
               <div style={shadow} className="p-2   rounded-xl ">
                    <img src={img} className=" w-full h-44  rounded-xl" alt="" /> 
                    <h3 className="m-0 text-center text-black">{name}</h3>   
                    <p style={small }>Model: {title}</p>
                    <p style={small}>Rating: {rating}</p>
                    <p style={small}>Overview: {overview}</p>
                    <p style={small}>Price: {price}</p>
                    <button onClick={()=>handleToBuy(cars)} className="button-common" >Click to Buy</button>
                </div>
        </div>
            




        </div>
    );
};

export default CarsShow;