import "../Assets/CSS/Form.css";
import Person from "./Person";
import Profiles from "./Profiles";
import {list} from "./List";
import { useState } from "react";

function Form({}){

    /*const [searchValue, setValue] = useState("");

    const handleChange = (event) =>{
        setValue(event.target.value);
    }

    const handleKeyDown = (event) =>{
        event.preventDefault();
        search(searchValue);
    }

    /*const filterName = () =>{
        let name = document.getElementById("input-text");
        //const [msg, setMsg] = useState("");
    
        const filteredList = list.filter ((person) => person.firstName === name); 
        
        if(filteredList.length === 0){
            <p>setMsg("No Results")</p>
        } else {
            <div className="left-profiles">
               {filteredList.map( (profil) =>
                    <Person 
                        picture = {profil.picture}
                        alt = {profil.firstName}
                        id = {profil.id}
                        title = {profil.title}
                        firstName = {profil.firstName}
                        lastName = {profil.lastName}
                    />    
                )} 
            </div>
        }
        
    }*/


    return(
        <div>
            <form>
                <input 
                type="text" 
                className="input-text" 
                id="input-text"
                placeholder="Search by name..."
                //onChange={handleChange}
                //onKeyDown={handleKeyDown}
                />
                
            </form>
        </div>
    )
}

export default Form;