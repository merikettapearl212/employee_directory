function Filter ({sortAscending, sortDescending}){
   
      
    return (
<div className="container mb-4">
<div className="float-right ">
  <button onClick={sortAscending} className="btn btn-secondary" >Names A-Z</button> {""}
  <button onClick={sortDescending} className="btn btn-secondary" >Names Z-A</button>

</div>
</div>

  )}



export default Filter;