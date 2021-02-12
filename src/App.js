import React,{useState}  from 'react'

const App = () => {
  const [fullName, setFullName] = useState({
    fname: '',
    lName: '',
  });

  const inputEvent = (event ) => {
    console.log(event.target.value)
    console.log(event.target.name)
    
    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      if(name === 'fName'){
        return {
          fname: value,
          lname: preValue.lname,
        }
      } else if(name === 'lName'){
        return {
          fname: preValue.fname,
          lname: value
        }
      }
    })
  }
   const onSubmit = (event) => {
    event.preventDefault();
    alert('form submitted')
  }
  
  return(
    <>
    <div className="main-div">
    <form onSubmit={onSubmit}>
    <div>
    <h1>Hello, {fullName.fname} {fullName.lname} </h1>
    <input type="text" 
    placeholder="Enter Your Name"
    name='fName'
    onChange={inputEvent} 
    value= {fullName.fname}/>
    <br />
    <input type="text" 
    placeholder="Enter Your Last Name"
    name='lName'
    onChange={inputEvent} 
    value= {fullName.lName}/>
      <button type="submit">
        Submit Me
      </button>
      </div>
      </form>
    </div>
  </>
  )
}
export default App;
