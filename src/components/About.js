import { useState } from "react";

export default function About() {
  const [darkMode, setDarkMode] = useState(false);
  const [ButtonText,SetButtonText]=useState("Dark Mode");


  const [myStyle,SetMyStyle]=useState(
  {
    color:'black',
    backgroundColor:'white'
})


  function changeMode()
  {
    if(!darkMode)
    {
      SetMyStyle({
        color:'white',
        backgroundColor:'black'
      })
      setDarkMode(true);
      SetButtonText("Light Mode");
    }
    else{
      setDarkMode(false);
      SetMyStyle({
        color:'black',
        backgroundColor:'white'
      })
      SetButtonText("Dark Mode");
    }
  }






  return (
    <div >
    <div  className="container mt-3 " style={myStyle}>
      <div className="container card mb-3 max-w-540" style={myStyle}>
        <div className="row g-0">
          
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">About Us</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    <div className="d-flex justify-content-center text-center">
      <button className="btn btn-primary" onClick={changeMode}> {ButtonText}</button>
      
      </div>
    </div>
  );
}
