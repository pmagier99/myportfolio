import styled from 'styled-components'
import Title from "../components/Title";

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
    return(
        <div>
            <Title name={"contact me"}/>
            <Form>
                <input type={"text"} id={"name"} required placeholder={"Name:"}/>
                <input type={"email"} id={"email"} required placeholder={"E-mail:"}/>
                <textarea id={"message"} rows={10} required placeholder={"Message:"}/>

                <button>
                    Send
                </button>
            </Form>
        </div>
    )
}

export default Contact;