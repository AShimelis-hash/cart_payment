import React, { useState} from 'react';


function Home() {

  const [input, setInput] = useState({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]: value}));


  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(input);
  }
  return (
    <div className='bg-sky-100 '>
      <div>
        <h1 className='text-bold '> Enter Product data</h1>
        <form className='flex-col' onSubmit={handleSubmit}>
          <label>Product</label>
        <input type='text'name='product' value={input.product || ""} placeholder='enter your product' onChange={handleChange}/><br></br>
        <label>Price</label>
        <input type='number' name="price" value={input.age || ""} placeholder='enter product price' onChange={handleChange}/><br></br>
        <label>Product Owner</label>
        <input type='text' name="owner" value={input.owner || ""} placeholder='product ' onChange={handleChange}/>
        <div>
          <button  type="submit" className='bg-blue-800' onClick={"submit"}>
            Submit
          </button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default Home