import { Template } from "./template";

export type Invite = {
  to: string;
  templage: Template;
  content: string;
  extractContent: string;
  time: string;
  place: string;
};
