import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Details() {
  const navigate = useNavigate()
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("http://localhost:3000/user");
        setItems(res.data);
        setNo(items.length);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="maincontainer">
        <div className='formdiv'>
          <h3 className="text-center"><u>LIST OF USERS</u></h3>
          <br /><br />
          <table className="table table-striped table-light mt-3">
            <thead>
              <tr className="table-primary">
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item,index) => (
                <tr key={index}>
                  <td aria-disabled>{item.fname}</td>
                  <td aria-disabled>{item.lname}</td>
                  <td aria-disabled>{item.email}</td>             
                </tr>
              ))}
            </tbody>
          </table>
         <button className='signinbtn' onClick={()=>navigate('/')}>BACK</button> 
       </div>
    </div>
    </>
  );
}

export default Details;
