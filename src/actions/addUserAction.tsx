// Server Actions
"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const addUserAction = async (formData: FormData) => {
  const userName = formData.get("userName")?.toString();
  const email = formData.get("email")?.toString();

  if (!userName || !email) {
    throw new Error("Username and email are required");
  }

  await prisma.user.create({
    data: {
      userName,
      email,
    },
  });

  revalidatePath("/");
};
