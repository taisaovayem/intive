import { getInvite } from "../../helpers";
import { Metadata } from "next";
import { TEMPLATE } from "../../constants";

type InviteProps = {
  slug: string;
};

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
