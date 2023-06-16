import Auth from "@/components/Auth/Auth";
import Chat from "@/components/Chat/Chat";
import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  const { data, status } = useSession();
  const reloadSession = () => {};

  return (
    <div className="font-Space">
      {data?.user.userName ? (
        <Chat />
      ) : (
        <Auth session={data} reloadSession={reloadSession} />
      )}
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  return {
    props: {
      session: session,
    },
  };
}
