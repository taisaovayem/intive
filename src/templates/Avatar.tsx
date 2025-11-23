/* eslint-disable @next/next/no-img-element */
import { Invite } from "../types/invite";

export function AvatarTemplate(invite: Invite) {
  return (
    <div className="h-screen w-full bg-[url(/avatar-background.jpeg)] bg-no-repeat bg-bottom bg-[#f5f6fa] bg-contain text-black flex justify-center items-center text-center">
      <div className="font-cormorant-infant text-2xl">
        <div>Kính mời</div>
        <div className="font-pinyon-script text-4xl py-4">{invite.to}</div>
        <div>{invite.content}</div>
        <img src="/avatar-fire-and-ash.png" alt="Avatar Fire And Ash" className="max-w-full"/>
        <div className="pt-8 text-xl">{invite.time}</div>
        <div className="text-xl">{invite.place}</div>
      </div>
    </div>
  );
}

export default AvatarTemplate;
