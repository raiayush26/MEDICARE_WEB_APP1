import React from 'react'
import './Suceess-Card.css';
function Card(props) {
  console.log(props);
  return (
    <>
    <div className="col-lg-4">
    <div class="success-card">
      <img src={props.ProfilePic} alt="User Image" class="user-image"/>
      <div class="user-details">
        <div class="user-name">
          <p className="info">{props.fName}</p>
        </div>
        <div class="user-gender">
          
        </div>

        <div class="user-email">
          <p>{props.email}</p>
        </div>
        <div class="user-email">
          <p>{props.phoneNumber}</p>
        </div>
        <div class="user-email">
          <p>{props.Age}</p>
        </div>
        <div class="user-email">
          <p>{props.BloodGroup}</p>
        </div>
        <div class="user-email">
          <p>{props.Gender}</p>
        </div>
      </div>
    </div>
</div>
  </>
  )
}

export default Card;
/* <div className="col-lg-4"
 <div className="card ">
                        <div className="card-body">
                          <div className="profile-div">
                                <img src={props.ProfilePic} className="rounded" alt="profile-pic"/>
                          </div>
                            <h5 className="card-title">Basic Info</h5>
                            <h6 className="info">First Name:  </h6> <p className="info">{props.fName}</p><br/>
                            <h6 className="info">Phone Number:  </h6> <p className="info">{props.phoneNumber}</p><br />
                            <h6 className="info">Email:  </h6> <p className="info">{props.email}</p><br/>
                            
                            
                            <div class="nav-item dropdown">
                            
                            
                            </div>
                            
                        
                    </div>
                    </div> 
                    </div> */