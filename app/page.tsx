import Login from "@/components/auth/Login"
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  
  return (<div>
    <h1>Hello World</h1>
    <Login/>
  </div>
  )
}
