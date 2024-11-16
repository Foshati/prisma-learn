"use server";

import { revalidatePath } from "next/cache";

export const addUserAction = async (formdata: FormData) => {
  console.log(formdata.get("userName"));
  console.log(formdata.get("email"));

  revalidatePath("/");
};
