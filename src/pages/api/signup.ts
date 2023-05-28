// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createAccount } from "@src/utils/appwrite";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  userId?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await createAccount(req.body.phoneNumber);
    res.status(200).json({ userId: response.userId });
  } catch (err) {
    res.status(500).json({ message: "interal error" });
  }
}
