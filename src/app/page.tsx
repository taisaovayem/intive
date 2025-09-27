import { getAllInvite } from "@/helpers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thiệp mời",
  description: "Trăm yêu thương, ngàn lời nói",
  openGraph: {
    title: "Thiệp mời",
    description: "Trăm yêu thương, ngàn lời nói",
  },
};

export default async function Home() {
    const allInvite = await getAllInvite();
  return (
    <div
      className="mx-auto w-full max-w-2xl text-center p-4"
      style={{ marginTop: "10vh" }}
    >
      Đời có nhiều điều trân quý
      <br />
      Bạn là điều đầu tiên
      {allInvite.map(invite => <div key={invite.to}>{invite.to}</div>)}
    </div>
  );
}
