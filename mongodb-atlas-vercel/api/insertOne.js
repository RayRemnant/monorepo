import handler from "../lib/handler"

export default async (req, res) => {
  const collection = await handler(req)

  const { acknowledged, insertedId } = await collection.insertOne(req.body.data)

  res.status(200).json({ acknowledged, insertedId })
}
