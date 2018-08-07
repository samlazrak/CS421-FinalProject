import { Component, OnInit } from '@angular/core'
import { Apollo } from 'apollo-angular'

import { registerUser, registerUserResponse } from '../../queries/queries'

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  userName: string = ''
  email: string = ''
  firstName: string =''
  lastName: string = ''
  password: string = ''

  relocate = function() { window.location.href=('localhost:4200/loginProfile') }

  constructor(private apollo: Apollo) { }

  ngOnInit() {
  }

  createUser() {
    this.apollo
      .mutate<registerUserResponse> ({
        mutation: registerUser,
        variables: {
          userName: this.userName,
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password
        }
    }).subscribe((response) => {
      console.log(response)

        this.relocate

    }, (err) => {
        if(!this.userName){
            alert("Username Required")
        } 
        else if (!this.email) {
            alert("Email Required")
        } 
        else if (!this.password) {
            alert("Password Required")
        } 
        else {
            console.log(err)
            alert("This user already exists. Please try again.")

            window.location.reload()
        }
    })
  }
}

