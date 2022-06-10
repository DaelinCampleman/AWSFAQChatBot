import { Component } from '@angular/core';
import * as AWS from "@aws-sdk/client-lex-runtime-v2";
import { AWSConfig, BOT_ID, BOT_ALIAS_ID, LOCALE_ID, INIT_INTENT } from 'src/aws-exports';
import { HttpClient } from '@angular/common/http';

const client = new AWS.LexRuntimeV2(AWSConfig);
const SESSION = "session"+Date.now();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Takealot FAQ Bot";
  responseR: {message:string, user:string}[] = [];

  constructor(private http: HttpClient){

  }

  // public createSession(){
  //   client.putSession({
  //     sessionId: SESSION,
  //     botId: BOT_ID,
  //     botAliasId: BOT_ALIAS_ID,
  //     localeId: LOCALE_ID,
  //     sessionState: {
  //       intent: {
  //         name: INIT_INTENT
  //       }
  //     }
  //   });
  // }

  public showMessage(message: string, user: string){
    let tmpMessage = message.split(" ");
    tmpMessage.forEach(word => {
      if(word.startsWith("http")){
        message = message.replace(word, "<a href=\""+word+"\" target=\"_blank\">"+word+"</a>");
      }
      if(word.includes("@")){
        message = message.replace(word, "<a href=\"mailto:"+word+"\">"+word+"</a>");
      }
    });

    if(message.includes("http://stuffs.co.za/hsjfyt")){
      message = message + "<br /><img src=\"https://media.takealot.com/covers_images/0e30bcf4ede54ccfb31afb6717dcc650/s-pdpxl.file\" width=\"100%\" />";
    }

    this.responseR.push({message:message!, user:user});
    (<HTMLInputElement>document.getElementById("messagesSpot")).scrollTop = (<HTMLInputElement>document.getElementById("messagesSpot")).scrollHeight;
  }

  public getResponse = async(input: string) => {
    const params = {
      botId: BOT_ID,
      botAliasId: BOT_ALIAS_ID,
      localeId: LOCALE_ID,
      sessionId: SESSION,
      text: input
    }

    try {
      const resp = await client.recognizeText(params);
      return resp.messages![0].content;
    } catch (error) {
      console.log(error);
      return "I'm not too sure what you mean. Please try again";
    }
  }

  public input(e: Event){
    e.preventDefault();

    let input = (<HTMLInputElement>document.getElementById("input"));

    this.showMessage(input.value!, "from-me");
    this.showMessage("...", "from-them");

    this.getResponse(input.value).then(resp => {
      this.responseR.pop();
      if(resp == "Okay, have a great day! :)"){
        this.showMessage(resp!, "from-them");
        this.showMessage("This chat has ended", "info");
      }else{
        this.showMessage(resp!, "from-them");
      }
    });
    input.value = "";
  }
}
