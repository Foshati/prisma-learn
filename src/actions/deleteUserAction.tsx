// Server Actions
"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteUserAction = async (formData: FormData) => {
    const userId = formData.get("userId")?.toString();
  
    if (!userId) {
      throw new Error("User ID is required");
    }
  
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
  
    revalidatePath("/");
  };
  