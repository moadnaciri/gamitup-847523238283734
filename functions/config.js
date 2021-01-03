import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://moadnaciri:xmls1234@cluster0.zlrsu.gcp.mongodb.net/mangasgadb?',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'AQjR9rpBWLFtwFh0KCYaOczsENOcPviM3RZmWJrxS-0twBefCbyM875SlLM_Qu1czKWBARs8VKtcb9Wv',
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
};
