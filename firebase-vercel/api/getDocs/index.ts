import type { VercelRequest, VercelResponse } from "@vercel/node"

import { getDocs } from "../_firebase.js"

export default async (req: VercelRequest, res: VercelResponse) => {
  const {
    body: { collectionName }
  } = req

  res.send(await getDocs(collectionName))
}
