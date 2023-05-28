import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENPOINT)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

export const account = new Account(client);

export const createAccount = (phoneNumber: string) => {
  return account.createPhoneSession(ID.unique(), phoneNumber);
};
