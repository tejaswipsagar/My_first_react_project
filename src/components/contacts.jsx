import React from "react";
import { contact_details } from "../contacts_details";

function Contacts(){
    return(
        <section id="first-section">
            <h1 className="my-contacts-h1">My contacts</h1>
            <div className="first-card mx-auto cards">
                <h4>{contact_details.name1}</h4>
                <p>{contact_details.ph_no1}</p>
                <p>{contact_details.e_mail1}</p>
                <img className="card-img" src={contact_details.img1}></img>

            </div>
            <div className="second-card mx-auto cards">
                <h4>{contact_details.name2}</h4>
                <p>{contact_details.ph_no2}</p>
                <p>{contact_details.e_mail2}</p>
                <img className="card-img" src={contact_details.img2}></img>

            </div>
            <div className="third-card mx-auto cards">
                <h4>{contact_details.name3}</h4>
                <p>{contact_details.ph_no3}</p>
                <p>{contact_details.e_mail3}</p>
                <img className="card-img card-img3" src={contact_details.img3}></img>

            </div>

            

        </section>
    )
};

export default Contacts;