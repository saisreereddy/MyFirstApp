import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService]
})
export class ContactsComponent implements OnInit {
contacts:Contact[];
contact:Contact;
first_name:String;
last_name:String;
phone:String;




  constructor(private contactservice:ContactService) { }
addContact()
{
const newContact={
first_name:this.first_name,
last_name:this.last_name,
phone:this.phone

}
this.contactservice.addContact(newContact)
.subscribe(contact =>{


this.contacts.push(contact);
this.contactservice.getContacts()
.subscribe(contacts =>
this.contacts=contacts);

});


}




  deleteContact(id:any)
  {
   var  contacts=this.contacts;
   this.contactservice.deleteContact(id)
    .subscribe(data => {
if(data.n==1)
{
for(var i=0;i<contacts.length;i++)
{

  if(contacts[i]._id==id)
  {
contacts.splice(i,1);

  }
}

}
      
    })
  }

  ngOnInit() {
this.contactservice.getContacts()
.subscribe(contacts =>
this.contacts=contacts);



  }

}
