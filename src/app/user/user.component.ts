import { Component } from '@angular/core';
import { id } from '@cds/core/internal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
users=[{name:"ali",id:1,color:'blue'},
  {name:"sami",id:2,color:'red'},
    {name:"wafa",id:3,color:'green'},
    
]
iduser:any
Show:boolean =false
message:any
onDelete(id:any){
  console.log('id',id)
  {this.iduser=id
    this.Show=true
  }
}
canceleAction()
{this.Show=false}
ondelete1(){
  console.log('',)
  this.Show=true
}

}
