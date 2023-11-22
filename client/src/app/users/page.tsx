import { NextResponse } from "next/server";

async function getUserData() {
  const res = await fetch("http://localhost:8000/api/users/findAll");
  // const data = await res.json();
  // console.log(data, "in api");
  return res.json();
  // return NextResponse.json({ data });
}

type user = {
  name: string;
  _id: string;
  gender: string;
  age: number;
};

export default async function UsersPage() {
  const { users } = await getUserData();
  console.log(users);

  return (
    <ul>
      {users.map((user: any) => {
        return <li key={user._id}>{user.name}</li>;
      })}
    </ul>
  );
}
