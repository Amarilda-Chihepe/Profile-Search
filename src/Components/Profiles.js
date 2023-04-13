import "../Assets/CSS/Profile.css";
import "../Assets/CSS/Form.css";
import Person from "./Person";
import { useEffect, useState } from "react";
import Form from "./Form";
import {list} from "./List";

function Profiles(){
    const [people, setList] = useState([]);
    const [searchValue, setValue] = useState("");
    const [updateList, setUpdateList] = useState([]);
   //const [updatedValue, setUpdate] = useState();
   
   // useEffect(() => {setList(list);}, []);

   function fillter(searchValue){
        if(searchValue!== ""){
            const filteredList = list.filter((person) => person.firstName === searchValue);
            //setUpdateList(filteredList);
            setList(filteredList);
        }    
    } 

   const handleChange = (event) =>{
     // setValue(event.target.value);
      const value = event.target.value;
        fillter(value);
      
    }

    return(

        <div>
            <div>
                <form>
                    <input 
                        type="text" 
                        className="input-text" 
                        id="input-text"
                        placeholder="Search by name..."
                        onChange={handleChange}
                       // onKeyDown={handleKeyDown}
                    />
                    
                </form>
            </div>

            <div className="profiles">
       
              
                <div className="right-profiles">
                    {people.map( (profil) =>
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
            </div>
        </div>
        
    )

}

export default Profiles;