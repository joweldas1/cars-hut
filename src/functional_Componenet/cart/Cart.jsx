import CartData from "../../cartData/cartData";


const Cart = ({cartsCar,handleToConfirm}) => {

    

    return (
        <div className="mt-20 mb-">
            <h2 className="text-center my-3 font-3xl md:text-4xl font-semibold"> Confirmation to Buy</h2>
            <h4 className="text-center">Selected :{cartsCar.length} </h4>

            <CartData cartsCar={cartsCar} handleToConfirm={handleToConfirm} ></CartData>
        </div>
    );
};

export default Cart;