import { useState } from "react";

function App() {
  const [username, setUsername]=useState("");
  const [userEmail, setUserEmail]=useState("");
  const [checkedInterests, setCheckedInterests]=useState({});
  const [formIsSubmitted, setFormIsSubmitted]=useState(false);
  function handleUsernames(e){
    setUsername(e.target.value);
  }
  function handleUserEmails(e){
    setUserEmail(e.target.value);
  }
  function handleFormSubmission(e){
    e.preventDefault();
    setFormIsSubmitted(true);
    setUserEmail("");
    setUsername("");
  }
  function handleCheckboxes(e){
    const {id, checked}=e.target;
    setCheckedInterests(previousState=>({
      ...previousState, [id]:checked
    }));
  }
  return (
    <div>
      <h1>Hi, I'm Nobert Muma</h1>
      <img src="https://images.unsplash.com/photo-1664331744656-709fdc75328d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A picture of Nobert at work"/>
      <h2>About Me</h2>
      <p>Count on me to get your work done.</p>
      <button><a href="https://github.com/Nobert-Muma">GitHub</a></button>
      <button><a href="https://www.linkedin.com/in/nobert-muma-46a58b312/">LinkedIn</a></button>
      <div id="newsletter">
        <form onSubmit={handleFormSubmission}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernames}/>
          <br/>
          <br/>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={userEmail} onChange={handleUserEmails} placeholder="Enter your email address"/>
          <div id="interestsList">
            <h2>Select All The Interests That Apply To You:</h2>
            <input type="checkbox" id="interest1" name="interest1" value="travel" checked={checkedInterests["interest1"]|| false} onChange={handleCheckboxes}/>
            <label htmlFor="interest1">Travel</label>
            <input type="checkbox" id="interest2" name="interest2" value="dance" checked={checkedInterests["interest2"]|| false} onChange={handleCheckboxes}/>
            <label htmlFor="interest2">Dance</label>
            <input type="checkbox" id="interest3" name="interest3" value="golf" checked={checkedInterests["interest3"]|| false} onChange={handleCheckboxes}/>
            <label htmlFor="interest3">Golf</label>
            <input type="checkbox" id="interest4" name="interest4" value="writing" checked={checkedInterests["interest4"]|| false} onChange={handleCheckboxes}/>
            <label htmlFor="interest4">Writing</label>
            <input type="checkbox" id="interest5" name="interest5" value="art" checked={checkedInterests["interest5"]|| false} onChange={handleCheckboxes}/>
            <label htmlFor="interest5">Art</label>
            <input type="checkbox" id="interest6" name="interest6" value="fitness" checked={checkedInterests["interest6"]|| false} onChange={handleCheckboxes}/>
            <label htmlFor="interest6">Fitness</label>
            <input type="checkbox" id="interest7" name="interest7" value="drawing" checked={checkedInterests["interest7"]|| false} onChange={handleCheckboxes}/>
            <label htmlFor="interest7">Drawing</label>
          </div>
          <input type="submit" value="Submit"/>
        </form>
        {formIsSubmitted?<h3>"Newsletter received successfully"</h3>:null}
      </div>
    </div>
  );
}

export default App;
