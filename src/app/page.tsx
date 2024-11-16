import { FormUser } from "@/components/formUser";
import { ShowUser } from "@/components/showUser";
import { Suspense } from "react";

export default async function Page() {
  return (
    <>
      <Suspense fallback={<p>loading...</p>}>
      <FormUser/>
    </Suspense>

      <Suspense fallback={<p>loading...</p>}>
        <ShowUser />
      </Suspense>
    </>
  );
}
