import { Invite } from "../types";
import path from "path";
import fs from "fs";
import { ENCODING, INTIVE_DIRECTORY } from "@/constants";
import matter from "gray-matter";

function getMdFileName(slug: string) {
  const mdFileName = slug.match(/^[0-9a-zA-Z_\-. ]+.(md|mdx)$/gim)
    ? slug
    : slug + ".md";
  return mdFileName;
}

export async function getInvite(slug: string): Promise<Invite> {
  const mdFileName = getMdFileName(slug);
  const postPath = path.join(INTIVE_DIRECTORY, mdFileName);
  const postFileContent = fs.readFileSync(postPath, ENCODING);
  const matterResult = matter(postFileContent);
  return matterResult.data as Invite;
}

export async function getAllInvite() {
  const fileList = fs.readdirSync(INTIVE_DIRECTORY);
  const allInvite: Invite[] = [];
  for (const fileName of fileList) {
    const slug = fileName.replaceAll(".md", "");
    const post = await getInvite(slug);
    allInvite.push(post);
  }
  return allInvite.sort((a, b) => a.to.localeCompare(b.to));
}