import { useState } from "react";


function AddClaim({handlerAddClaim, employeeRecord}){
  const [claim, setClaim] = useState({
    claimDate: "",
    claimAmount: "",
    remarks:"",
   
  })

  const [employeeId, setEmployeeId] = useState({
    id: "",
  })



  const handleSubmit = (e) => {
    e.preventDefault();
    handlerAddClaim(claim, employeeId);
  };

  const handleChange = (e)=>{
    setClaim((prevClaim) => {
      return {
        ...prevClaim,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleChangeId = (e)=>{
    setEmployeeId((prevId) => {
      return {
        ...prevId,
        [e.target.name]: e.target.value
        };
    });
  };

  return(
  <div>
    <form onSubmit={handleSubmit}>
      <input name="claimDate" type="text" placeholder="Claim Date"  onChange={handleChange} value={claim.claimDate}/>
      <input name="claimAmount" type="text" placeholder="Claim Amount" onChange={handleChange} value={claim.claimAmount}/>
      <input name="remarks" type="text" placeholder="Remarks" onChange={handleChange} value={claim.remarks}/>
    

      <select onChange={handleChangeId} name="id" value={employeeId.id}>
        <option>Select Employee</option>
             {employeeRecord ? employeeRecord.map((record) => {
              return (
                      <option key={record.id} value={record.id}> 
                          {record.id + ": " + record.firstName + " " + record.lastName}
                        </option>
                     );
          }) 
        :null}
      </select>
    
      
      <button>Submit Employee</button>
    </form>
  </div>
  );

}

export default AddClaim;