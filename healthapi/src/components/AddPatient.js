import React from "react";

export default function AddPatient(handleAddSubmit){
    return (
        <div>
            <h3>ADD FORM:</h3>
            <form onSubmit={handleAddSubmit}>
                First Name: <input type="text" name="firt_name" />
                Last Name: <input type="text" name="last_name" />
                Blood Group: <input type="text" name="blood" />
                 <button type="submit" >ADD</button>
            </form>
        </div>
    )
}