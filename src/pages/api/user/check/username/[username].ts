import type { NextApiRequest, NextApiResponse } from "next";

interface CheckUsernameResponse {
  isTaken: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CheckUsernameResponse>
) {
  const {
    query: { username },
    method,
  } = req;

  if (method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  // Here you can make a database query to check if the username is taken
  const isTaken = false; // Replace this with your database query

  res.status(200).json({ isTaken });
}
