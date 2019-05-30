import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChatApp';
  message : string;
  connection;
  messages = [];
  
  constructor(private chatService : ChatService){}

  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  
  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }
 
}
