import React, { useEffect, useState } from 'react'
import "./whats.scss"
import { useGlobalContext } from '../context/context'
import {MdSend} from "react-icons/md"
import imgUser from "../pages/images/user.svg"
import imgHello from "../pages/images/hello.svg"
import {AiFillCloseCircle} from "react-icons/ai"
import { toast } from 'react-toastify'
import {BsWhatsapp} from "react-icons/bs"

const Whatsaapcontact = () => {
  const { massage_Apper ,  close_massage  ,massageHandelar } = useGlobalContext()
  useEffect(() => {
    setTimeout(massageHandelar, 2000); // 2 minutes = 120,000 milliseconds
  }, []);
  const [message , setmessage] = useState("")
//   const inputHandelar = (e) => {
//     setmessage(e.target.value)
//   }
//  const form_message_Handelar = (e) => {
//     e.preventDefault()
  
//     const encodedMessage = encodeURIComponent(message);
//     const phoneNumber = '+965 6909 4485'; // Replace with the desired phone number
//     const whatsappLink = `https://api.whatsapp.com/send?phone=+965 6909 4485&`;
//       window.open(whatsappLink, '_blank');

//     setmessage("")
//     toast.success("شكرا لتواصلك سيتم الرد عليك فى اسرع وقت")
//  }
  return (
 <React.Fragment>

<a
  href="https://api.whatsapp.com/send?phone=96569094485"

  className="whats_button"
  target="_blank"
  rel="noopener noreferrer"
>
  <BsWhatsapp />
</a>


      </React.Fragment>
  )
}

export default Whatsaapcontact