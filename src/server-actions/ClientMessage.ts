"use server"

import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function createClientMessage(data: Prisma.ClientMessageCreateInput) {
     try {
          const res = await prisma.clientMessage.create({data});
          return res;

     } catch (error) {
          console.log("Error creating new message", error);
     }
} 