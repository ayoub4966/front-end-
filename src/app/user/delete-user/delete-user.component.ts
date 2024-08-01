import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})

export class DeleteUserComponent {
  @Input('userId')
  userId: any;
  @Output()
  close=new EventEmitter()
  closeAction(){
    this.close.emit(true)
  }
  @Output()
  save=new EventEmitter()
  saveAction(){
    this.save.emit("hello word")
    this.close.emit(true)
  }


}
