import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      message: {
        domain: "hellno.eth-liquiditylock.vercel.app",
        timestamp: 1737379154,
        expirationTime: 1745155154
      },
      signature: "325f3ebc0634f2009e940f34bc7b1466daa5c902ed78a8e421e917514091b0814c79a1c99677752492952cb91946a19a74da8cd11be83d36e76b437d69f9d8c81b",
      signingKey: "c2d85e0d152f0ecf9f592be170654eb8ecc291b8d185850513b753e5d6817c23"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
