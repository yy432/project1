import { useState } from "react";

function AddForm({handlerAddItem}){
  const [item, setItem] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "", 
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    handlerAddItem(item);

  };

  const handleChange = (e)=>{
    setItem((prevItem) => {

      return {
        ...prevItem,
        [e.target.name]: e.target.value
      };

    });
  };

  return(
  <div>
    <form onSubmit={handleSubmit}>
      <input name="firstName" type="text" placeholder="First Name"  onChange={handleChange} value={item.firstName}/>
      <input name="lastName" type="text" placeholder="Last Name" onChange={handleChange} value={item.lastName}/>
      <input name="email" type="text" placeholder="Email" onChange={handleChange} value={item.email}/>
      <input name="department" type="text" placeholder="Department" onChange={handleChange} value={item.department}/>
      <button>Submit Employee</button>
    </form>
  </div>
  );
}

export default AddForm