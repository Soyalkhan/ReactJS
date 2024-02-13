function Form(){    
    function handlesubmit(e){
        console.log("btn clicked in react!");
        document.body.style.backgroundColor ="pink";
        console.log("color changed");
    } 



    return(
       <form onSubmit={handlesubmit}>
        <button type="submit">submit</button>
       </form>
    );
}



export default Form