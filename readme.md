# AWS FAQ Chatbot

This program uses AWS Lex V2 and Angular to provide a chatbot that can answer the frequently asked questions on takealot.com

Live demo: [https://faqchatbot.campleman.co.za](https://faqchatbot.campleman.co.za)

## Prerequisites

IAM user setup with permissions:
- AWSLexFullAccess

AWS Lex Bot with the following for later:
- Bot ID
- Bot Alias ID

The AWS Lex Bot can be set up with the `Takealot_FAQ_Bot-7-KEZJAKPHFE-LexJson.zip` file from this repository.

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
