import { email } from './../../email';
import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
email :email=new email();
  constructor( private route: Router) { }

  ngOnInit(): void {
    emailjs.init("user_BM3lzJ6hf2cIhMIP8tHWo");

  }

sendMail(){
  var tempParams ={
    from_name:this.email.from,
    to_name:this.email.to,
    message:this.email.msg,

  }
  emailjs.send('service_a7v0po9','template_ujgbtoh',tempParams).then(
    data=>{this.route.navigate(["/"])},
    err=>{
      console.log(JSON.toString())
    }
  )
  }

}
