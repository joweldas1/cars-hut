import { useEffect } from "react";
import { useState } from "react";
import CarsShow from "../carsShow/CarsShow";

const CarsDataFetch = ({handleToBuy}) => {
    const[carsData,setCarData]=useState([]);
    
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/joweldas1/fake-car-data/main/cars.json')
        .then(res=>res.json())
        .then(data=>{
            const cars=data.cars;
            setCarData(cars)
        })
    },[])
    return (
        <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {
                carsData.map((car,idx)=><CarsShow cars={car} key={idx} handleToBuy={handleToBuy}></CarsShow>)
            }
            </div>
        </div>
    );
};

export default CarsDataFetch;