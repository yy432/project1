import { useState } from "react";


function AddClaim({ handlerAddClaim, employeeRecord }) {
  const [claim, setClaim] = useState({
    claimDate: "",
    claimAmount: "",
    remarks: "",
  })

  const [employeeId, setEmployeeId] = useState({
    id: "",
  })



  const handleSubmit = (e) => {
    e.preventDefault();
    handlerAddClaim(claim, employeeId);
  };

  const handleChange = (e) => {
    setClaim((prevClaim) => {
      return {
        ...prevClaim,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleChangeId = (e) => {
    setEmployeeId((prevId) => {
      return {
        ...prevId,
        [e.target.name]: e.target.value
      };
    });
  };

  return (
    <div className="form-group">
      <form onSubmit={handleSubmit}>


        <div className="input-align">
          <div className="form-lab">
            <label className="form-label">Claim Date:</label>
          </div>
          <input name="claimDate" type="text" placeholder="Enter Date of Claim" onChange={handleChange} value={claim.claimDate} className="form-control" />
        </div>

        <br />


        <div className="input-align">
          <div className="form-lab">
            <label className="form-label">Claim Amount:</label>
          </div>
          <input name="claimAmount" type="text" placeholder="Enter Claim Amount" onChange={handleChange} value={claim.claimAmount} className="form-control" />
        </div>

        <br />

        <div className="input-align">
          <div className="form-lab">
            <label className="form-label">Remarks:</label>
          </div>
          <input name="remarks" type="text" placeholder="Enter Remarks" onChange={handleChange} value={claim.remarks} className="form-control" />
        </div>

        <br />

        <div className="input-align">
          <div className="form-lab">
            <label className="form-label">Claim by:</label>
          </div>
          <select onChange={handleChangeId} name="id" value={employeeId.id} className="form-select">
            <option>Select Employee</option>
            {employeeRecord ? employeeRecord.map((record) => {
              return (
                <option key={record.id} value={record.id}>
                  {record.id + ": " + record.firstName + " " + record.lastName}
                </option>
              );
            })
              : null}
          </select>
        </div>


        <br />


        <button type="button" class="btn btn-success">Submit</button>
      </form>
    </div>
  );

}

export default AddClaim;