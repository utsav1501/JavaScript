class Message{
    constructor(sender,receiver,messageContent){
        this.sender=sender;
        this.receiver=receiver;
        this.messageContent=messageContent;
    }
    static totalMessages=0;
    static status=false;
    
    static recordMessage(){
        this.totalMessages++;
    }

    static changeStatus(){
        this.status=!this.status;
        const statusMessage=this.status?"online":"offline";
        console.log(`The status has been changed to ${statusMessage}`);
    }
    
    sendMessage(){
        console.log(`The message '${this.messageContent}' has been sent from '${this.sender}' to '${this.receiver}'`);
    }
    
    displayDetails(){
      console.log(`Sender: ${this.sender}`);
    console.log(`Receiver: ${this.receiver}`);
      console.log(`Message: ${this.messageContent}`);
      console.log(`Status: ${Message.status ? 'online' : 'offline'}`);
      console.log(`Total Messages: ${Message.totalMessages}`);
}
}
  
  Message.changeStatus();
  const myMessage = new Message("John", "Jane", "Hello");
  myMessage.sendMessage();
  myMessage.displayDetails();
  