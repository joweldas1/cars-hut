
const CartData = ({cartsCar,handleToConfirm}) => {
    return (
        <div className="m-auto text-center">
        <div>
        <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>price</th>
        <th>Image</th>
        <th>Click to Confirm</th>
      </tr>
    </thead>
    {
      cartsCar.map((car,idx)=>(
          <tbody key={idx}>
          <tr  className="bg-base-200">
          <th >{idx+1}</th>
          <td>{car.name}</td>
          <td>{car.price}</td>
          <td><img src={car.img} className="w-40 h-40" alt="" /></td>
        <td>  
          <button className="button-common" key={idx} onClick={()=>handleToConfirm(car)} >Confirm</button>
      </td> 
        </tr>
    </tbody>

        )  )
    }

  
  </table>
</div>


        </div>
        </div>
    );
};

export default CartData;