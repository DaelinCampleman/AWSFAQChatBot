# AWS FAQ Chatbot

This program uses AWS Lex V2 and Angular to provide a chatbot that can answer the frequently asked questions on takealot.com

## Prerequisites

IAM user setup with permissions:
- AWSLexFullAccess

AWS Lex Bot with the following for later:
- Bot ID
- Bot Alias ID

## Installation

Download the latest release

```bash
#curl
$ curl https://repo.stuffs.co.za/AWSFaqBot/master.zip

#wget
$ wget https://repo.stuffs.co.za/AWSFaqBot/master.zip
```

Install required node packages

```bash
$ npm install
```

Configure your AWS services and bot details in the `aws-exports.ts` file.

```javascript
// Fill in your keys and secrets

export const AWSConfig = {
  region: "us-east-1", // e.g. us-east-1
  credentials: {
    "accessKeyId": "AKIA2M3OUDK2SEJI6LSZ",
    "secretAccessKey": "3YNO1C4lOoftoNXHxKvQb6mn5xq/FLSnwdsdRBM4",
    "region": "us-east-1" // e.g. us-east-1
  }
};

export const BOT_ID = "PWHSSUJNJX";
export const BOT_ALIAS_ID = "80OHYBZJBJ";
export const LOCALE_ID = "en_ZA";
export const INIT_INTENT = "Hello";
```

## Usage

```bash
$ ng serve
```
