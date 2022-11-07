import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cartimg from "../assets/images/cart.png";
import "../../style/checkoutnew.css";
import { Link  ,useHistory} from "react-router-dom";
import { ADD, REMOVE_INT } from "../../controller/action";
import { userRequest } from "../../requestMethod";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

function CheckoutNew() {
  const [price, setPrice] = useState(0);
  const [paymentType, setPaymentType] = useState(null);
  const [address, setAddress] = useState(null); 
  const [img, setImg] = useState(null); 
  const [file, setFile] = useState(null);
  const history = useHistory();
  const getdata = useSelector((state) => state.cartReducer.carts);


  useEffect(() => {
    const totals = () => {
      let price = 0;
      getdata.map((e, i) => {
       return price = parseFloat(e.price) * e.qty + price;
      });
      setPrice(price);
    };
    totals();
  }, [getdata]);

    const dispatch = useDispatch();
    const addToCart = (e) => {
      dispatch(ADD(e));
    };

    const LessToCart = (e) => {
      dispatch(REMOVE_INT(e));
    };

  /* qty increment and decrement sample */

  //   const state = {value: 1}
  //   incrementt = increment.bind();
  //   decrementt = decrement.bind();
 

  // const [incrementt, setIncrement] = useState(0);
  // const [decrementt, setdecrement] = useState(0);
  // const increment =() => {
  //   setIncrement(prevState => {value: ++prevState.value});
  // }
  
  // const decrement =() =>  {
  //   setdecrement(prevState => {value: prevState.value > 0? --prevState.value : 0});
  // }
  const handleClick = async (e) => {
    e.preventDefault();
    try{
      
      const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImg(downloadURL );
        });
      }
    )
    if(getdata.length){
      const productData = getdata.map(elem => (
        {
          productId: elem._id,
          quantity: elem.qty
        } 
      ))
      const formData = {
        address:address,
        paymentType:paymentType,
        amount:price,
        products:productData,
        img: img
      }
    const res = await userRequest.post("/orders",formData);
    console.log(res)
    history.push("/success" );
    }
      } catch (error) {
        console.log(error)
      }
   // console.log(getdata)
    
  };
  return (
    <>
    {getdata.length ? (
      <section className="checkout-details">
    <div className="table-div" >
      <table className="table-checkout">
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product Qty</th>
            <th>Per Unit Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody >
        {getdata.map((e) => (
          <tr>
            <td>
            <p><Link to={`/cart/${e._id}`}>
                            <img className="checkout-img" src={e.img} alt="" />
                          </Link>
                          </p>
            </td>
            <td><p>{e.title.slice(0, 20)}...</p></td>
            <td>
              {/* <p>{e.qty}</p> */}
            <div className="quantity-input">
        <button className="quantity-input__modifier quantity-input__modifier--left" onClick={() => LessToCart(e)}>
          &mdash;
        </button>
        <input className="quantity-input__screen" type="text" value={e.qty} readonly />
        <button className="quantity-input__modifier quantity-input__modifier--right" onClick={() => addToCart(e)}>
          &#xff0b;
        </button>  
      </div>   
            </td>
            <td><p>{e.price}</p></td>
            <td><p>{e.price * e.qty}</p></td>
          </tr>
           ))}
           
        </tbody>
        <tfoot>
          <tr>
          <td colSpan="3" ></td>
            <td colSpan="1" className="total">Total Pay able amount : PKR</td>
            <td colSpan="1" ><h4>{price}</h4></td>
          </tr>
          <tr className='payment-mode' hidden>
            <td colSpan="2">Payment Mode</td>
            <td><a href="CheckoutNew" className="button">Strip</a></td>
            <td><a href="CheckoutNew" className="button">Easy Paisa</a></td>
            <td><a href="CheckoutNew" className="button">Jazzcash</a></td>
          </tr>
        </tfoot>
      </table>
  </div>
  <div className="checkOutForm">
  <div className="login-page">
      <form>
        <h2>Payment For Check Out </h2>
        <input type="name" name="name" required placeholder="User name" />
        <input type="email" name="email" required placeholder="Email" />

        <input
          type="mobile number"
          name="mobile number"
          required
          placeholder="Mobile Number"
        />
        <input type="address" name="address" required placeholder="Address"
        
        onChange={(e) => setAddress(e.target.value)} />
        <select name="payment_type" required  
               onChange={(e) => setPaymentType(e.target.value)}
>
          <option>Please Select Your Payment Mode</option>
          <option>Strip</option>
          <option>EasyPaisa - 0345-1234512</option>
          <option>JazzCash -  0300-1234512</option>
        </select>
        <input name="amount" value={price} hidden />
        <div><span>Amount to be Paid: </span><span>{price}</span></div>
        <div>
        <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="row">
          <button className="button" type="submit" onClick={handleClick}>
            Pay Now
          </button>
        </div>
      </form>
    </div>
  </div>
  </section>
                ) : (
                  <div className="empty">
                    <p>Your cart is empty</p>
                    <img src={cartimg} alt="" />
                  </div>
                  )}
                  </>
  );
}

export default CheckoutNew;
