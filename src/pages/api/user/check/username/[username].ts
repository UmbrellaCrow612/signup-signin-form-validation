import { NextApiRequest, NextApiResponse } from "next";

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

  let isTaken = true;

  if (username === "123456789w") {
    return res.status(400).json({ isTaken });
  }

  isTaken = false;
  res.status(200).json({ isTaken });
}
