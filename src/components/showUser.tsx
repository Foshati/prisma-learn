import { deleteUserAction } from "@/actions/deleteUserAction";
import prisma from "@/lib/db";
import { delay } from "@/lib/sleep";

export const ShowUser = async () => {
  await delay(2000);

  const users = await prisma.user.findMany();

  return (
    <div>
      <div className="flex flex-wrap gap-4 p-4">
        {users.map((user) => (
          <div
            className="m-4 p-8 bg-slate-400 round
      ed-md"
            key={user.id}
          >
            <p>{user.userName}</p>
            <p>{user.email}</p>
            <p>createdAt : {user.createdAt.toLocaleDateString()}</p>

            <form action={deleteUserAction}>
              <input type="hidden" name="userId" value={user.id} />
              <button
                type="submit"
                className="px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
              >
                delete
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};
