import { Injectable } from '@angular/core';
import emailjs  from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class MailService {


sendMail(mail:any,message:any){
  let params:any={}
  params.to_mail=mail

  params.from_name ="mheiproject@gmail.com"
  params.reply_to="mheiproject@gmail.com"
  params.secret_to="mheiproject@gmail.com"
  params.to_name="User"
  params.message="Szia"
  params.html_content="Szia"
  params.signature="Én"
  emailjs.send("service_0j8hyiw","template_ybm0jl2", params,"J4lUuMKxZy-SWTphR").then(
    (res)=>console.log("Email OK",res)

  ).catch(
    (res)=>console.log("Hiba",res)
  )
}

}