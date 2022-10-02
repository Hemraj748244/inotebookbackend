import React from 'react';

const AddNote = () => {
  
  
  return(
   <form>
          <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Title </label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="add a title here!"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Tags </label>
  <input className="form-control form-control-sm" type="text"  aria-label=".form-control-sm example"/>
</div>
   <button type="submit" className="btn btn-primary">Submit</button>
  </form> 
  )
}

export default AddNote;