import { addUserAction } from "@/actions/addUserAction";
import { Button } from "./ui";

export const FormUser = async() => {
   return (
    <div>

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

          <Button className="w-full" type="submit">
            add user
          </Button>
        </form>
      </div>
    </div>
  );
};
