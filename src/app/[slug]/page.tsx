import { getInvite } from "../../helpers";
import { Metadata } from "next";
import { INTIVE_DIRECTORY, TEMPLATE } from "../../constants";
import fs from "fs";

type InviteProps = {
  slug: string;
};


export async function generateStaticParams() {
  const fileList = fs.readdirSync(INTIVE_DIRECTORY);
  const inviteList: InviteProps[] = [];
  for (const fileName of fileList) {
    const slug = fileName.replaceAll(".md", "");
    inviteList.push({
      slug,
    });
  }
  return inviteList;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<InviteProps>;
}): Promise<Metadata> {
  const { slug } = await params;
  const invite = await getInvite(slug);

  if (!invite) {
    return {
      title: "Thiệp mời không tồn tại",
      description: "Có vẻ như có tí nhầm lẫn rồi",
      openGraph: {
        title: "Thiệp mời không tồn tại",
        description: "Có vẻ như có tí nhầm lẫn rồi",
        images: "/404.jpg",
      },
    };
  }

  const metaData: Metadata = {
    title: `Thiệp mời ${invite.to}`,
    description: invite.content,
    openGraph: {
      title: `Thiệp mời ${invite.to}`,
      description: invite.content,
      images: "/thumbnail.png",
    },
  };

  return metaData;
}

export default async function InvitePage({
  params,
}: {
  params: Promise<InviteProps>;
}) {
  const { slug } = await params;
  const invite = await getInvite(slug);
  const TemplateComponent = TEMPLATE[invite.templage];

  return <TemplateComponent {...invite}/>
}
