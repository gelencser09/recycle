import { getAllUsers } from "@/lib/data/user";

export default async function Fail() {
  const users: any[] = await getAllUsers();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.email}</p>
          <p>{user.otpId}</p>
        </div>
      ))}
    </div>
  );
}
