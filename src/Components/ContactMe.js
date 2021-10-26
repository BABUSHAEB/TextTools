import React,{useState} from 'react'
import './contact.css'

export default function ContactMe() {

    const [user, setUser] = useState({
        Name:"",
        Email:"",
        Phone:"",
        Remarks:"",
    });
    let name, value;
    const getUserData = (event) =>{

        name = event.target.name;
        value = event.target.value
        setUser({ ...user, [name]: value });

    }
    const pressButton = async (e) =>{
        e.preventDefault();

        const { Name,Email,Phone,Remarks} = user;

        if(Name && Email && Phone && Remarks){
            const res = await fetch("https://firstfirebase-24839-default-rtdb.firebaseio.com/contactform.json",{
               method: "POST",
               headers:{
                   "Content-Type": "application/json",
               },
               body:JSON.stringify({
                   Name,
                   Email,
                   Phone,
                   Remarks,
               })
   
           }
   
           )
           if(res){
               setUser({
                   Name:"",
                   Email:"",
                   Phone:"",
                   Remarks:"",
               });
               alert("Data Stored Sucessfully");
   
           }

        }else{
            alert("Please fill all field")
        }

    }

    return (
        < >
            {/* <iframe title="Contact Me!" className="contactForm container-fluid" src="https://docs.google.com/forms/d/e/1FAIpQLSeImnb6UaFMRaBZ054zoiYcOZYPqdkUrAM9aht8VmbGNWlmRA/viewform?embedded=true" width="640" height="1040" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
             */}
              <div className="loginForm">
            <h1>Contact Me ☎</h1>
            <form className="form-margin" method="POST">
                <input className="input-contact" type="text" name="Name"  placeholder="Username"
                value={user.Name} onChange={getUserData} /><br/>
                <input className="input-contact" type="email " name="Email"  placeholder="Email"
                value={user.Email} onChange={getUserData}/><br/>
                <input className="input-contact" type="number" name="Phone"  placeholder="Phone Number"
                value={user.Phone} onChange={getUserData}/><br/>
                <input className="input-contact" type="text" name="Remarks" placeholder="Remarks"
                value={user.Remarks} onChange={getUserData} /><br/>
                <button className="button-contact" onClick={pressButton}>Submit</button>
            </form>
        </div>
            



        </>
    )
}

