/* eslint-disable no-undef */
import {useState} from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [Name,setName] = useState('');
    const [Age,setAge] = useState('');
    const [Personality,setPersonality] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {Name,Age,Personality};

        fetch('http://localhost:8000/blogs',
        {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        }
        ).then(() => {
            console.log('data added');
            history.push('/'); 
        })


        
    }

    return ( 
        <div className="create">
            <h2>Add  New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Author Age</label>
                <input
                type="text"
                required
                value = {Age}
                onChange = { (e) => {
                    setAge(e.target.value);
                }}
                >   
                </input>
                <label>Article Body</label>
                <textarea
                required
                value = {Personality}
                onChange = {(e) => {
                    setPersonality(e.target.value);
                }}
                >
                </textarea>
                <label>Author</label>
                <select
                value={Name}
                onChange = {(e) => {
                    setName(e.target.value);
                }}
                >
                    <option value=''></option>
                    <option value="Gazi Wasif Akram">Gazi Wasif Akram</option>
                    <option value="Anika Waziha">Anika Waziha</option>
                    <option value="Maisha Anan Prova">Maisha Anan Prova</option>
                </select>
                <button>Add Blog</button>

            </form>
        </div>
     );
}
 
export default Create;