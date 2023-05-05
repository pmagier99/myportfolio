import styled from 'styled-components'
import Title from "../components/Title";

import {send} from 'emailjs-com'
import {useState} from 'react'

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  input,textarea,button{
    width: 60%;
    margin: 10px 0;
    background-color: #444444;
    border: 1px solid transparent;
    border-radius: 25px;
    padding: 20px 15px;
    color: #EFF1F3;
    resize: none;
    font-size: 1rem;
  }
  @media (max-width: 1024px){
    input,textarea,button{
      width: 90%;
    }
  }
  button{
    &:hover{background-color: #F8CC34;}
  }
`

function Contact(){

    const [toSend, setToSend] = useState({
        from_name: '',
        email: '',
        message: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_nyrczzy',
            'template_ywwq7n9',
            toSend,
            'Z5ufaG8gasktIzIke'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);


            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };
    const handleChange = (e) =>{
        setToSend({...toSend, [e.target.name]: e.target.value})
    }

    const [sendMsg, setSendMsg] = useState(true)


    return(
        <div>
            <Title name={"contact me"}/>


            <Form onSubmit={onSubmit}>

                <h1>{ sendMsg ? "" : "Message sent, I will be in touch with you shortly!"} </h1>

                <input type={"text"} id={"name"} name={'from_name'} required placeholder={"Name:"} value={toSend.from_name} onChange={handleChange}/>
                <input type={"email"} id={"email"} name={'email'} required placeholder={"E-mail:"} value={toSend.email} onChange={handleChange}/>
                <textarea id={"message"} rows={10} name={'message'} required placeholder={"Message:"} value={toSend.message} onChange={handleChange}/>

                <button type='submit' onClick={() => setSendMsg(false)}>
                    Send
                </button>
            </Form>

        </div>
    )
}

export default Contact;