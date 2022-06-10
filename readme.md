# AWS FAQ Chatbot

This program uses AWS Lex V2 and Angular to provide a chatbot that can answer the frequently asked questions on takealot.com

Live demo: [https://faqchatbot.campleman.co.za](https://faqchatbot.campleman.co.za)

## Prerequisites

- Angular CLI
```bash
$ npm install -g @angular/cli
```

IAM user setup with permissions:
- AWSLexFullAccess

AWS Lex Bot with the following for later:
- Bot ID
- Bot Alias ID

## Installation

Download the latest release from the repository.

Install required node packages

```bash
$ npm install
```

Configure your AWS services and bot details in the `aws-exports.ts` file.

```javascript
// Fill in your keys and secrets

export const AWSConfig = {
  region: "", // e.g. us-east-1
  credentials: {
    "accessKeyId": "",
    "secretAccessKey": "",
    "region": "" // e.g. us-east-1
  }
};

export const BOT_ID = "";
export const BOT_ALIAS_ID = "";
export const LOCALE_ID = "";
export const INIT_INTENT = ""; // Intent to start an interaction with the bot
```

## Usage

```bash
$ ng serve
```
