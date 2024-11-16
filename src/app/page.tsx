import { addUserAction } from "@/actions/addUserAction";
import { Button } from "@/components/ui";
import prisma from "@/lib/db";

export default async function Page() {
  const users = await prisma.user.findMany();
  return (
    <>
      <div className="mx-auto max-w-md p-4">
        <form className="space-y-4 " action={addUserAction}>
          <div>
            <input
              type="text"
              name="userName"
              placeholder="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 placeholder-gray-400"
              />
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 placeholder-gray-400"
              />
          </div>

          <Button className="w-full" type="submit">add user</Button>
        </form>
      </div>

      <div className="flex flex-wrap gap-4 p-4">
        {users.map((user) => (
          <div className="m-4 p-8 bg-slate-400 rounded-md" key={user.id}>
            <p>{user.userName}</p>
            <p>{user.email}</p>
            <p>createdAt : {user.createdAt.toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </>
  );
}
