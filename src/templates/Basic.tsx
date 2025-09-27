import { Invite } from "../types/invite";
export function BasicTemplate(invite: Invite) {
  return <div>
    <div>Kính mời</div>
    <div>{invite.to}</div>
    <div>{invite.content}</div>
    <div>{invite.time}</div>
    <div>{invite.place}</div>
    <div>{invite.extractContent}</div>
  </div>;
}

export default BasicTemplate;
