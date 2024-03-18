
const ConfirmToBuy = ({confirm}) => {
   const totalCount=confirm.reduce((count,item)=>{
    const items=parseInt(item.price.replace(/[$,]/g ,''))
    return count+items
   },0)
   console.log(totalCount);
    return (
        <div>
            <h2 className="text-center"> Selected Product:{confirm.length}</h2>
            <hr className="w-44 " />
           {
            confirm.map((i,idx)=>(
               <div className="flex justify-around" key={idx}>
                 <h3>name: {i.name}</h3>
                <h3>{i.price}</h3>
               </div>
            ))
           }
              <div>
            <h2>Total Price :{totalCount} </h2>
           </div>

        </div>
    );
};

export default ConfirmToBuy;