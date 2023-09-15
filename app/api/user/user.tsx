import { prisma } from "@/app/lib/prisma";
import type { NextApiRequest, NextApiResponse } from 'next'


// PUT /api/publish/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  
  const users = await prisma.user.findMany()

    res.json(users);

}