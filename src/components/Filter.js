function Filter ({sortAscend, sortDescend}){
   
      
    return (
<div className="container mb-4">
<div className="float-right ">
  <button onClick={sortAscend} className="btn btn-secondary shadow" >Names A-Z</button> {""}
  <button onClick={sortDescend} className="btn btn-secondary shadow" >Names Z-A</button>

</div>
</div>

  )}



export default Filter;