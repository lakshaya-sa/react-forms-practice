import { useState } from "react"
import './App.css'

function App(){
  const[formData,setFormData] = useState({
    name :"",
    email:"",
    message:""
  })

  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
}

  function handleSubmit(event) {
    event.preventDefault()

    console.log(formData)
    setSubmittedName(formData.name)
    setSubmitted(true)
    setFormData({
      name: "",
      email: "",
      message: ""
  })
  }

  return(
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <label>Name: </label>
        <input type="text"
          value={formData.name}
          name="name"
          onChange={handleChange}
          required
        />

<br /><br />

        <label>Email: </label>
        <input type="text" 
          value={formData.email}
          name="email"
          onChange={handleChange}
          required
        />
    
<br /><br />

        <label>Message: </label>
        <textarea
          value={formData.message}
          name="message"
          onChange={handleChange}
          required
        ></textarea>

<br /><br />

        <button type="submit">Send Message</button>
      </form>

    {submitted && (<h5>Thank you, {submittedName}! We received your message.</h5>)}

    </div>
  )
}

export default App