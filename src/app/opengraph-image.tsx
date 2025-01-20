import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = "Farcaster Frames V2 Demo";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-purple-900">
        <div tw="flex flex-col items-center bg-white/10 p-12 rounded-3xl border border-purple-300/20">
          <h1 tw="text-6xl font-bold text-purple-100">{PROJECT_TITLE}</h1>
          <h3 tw="text-2xl text-purple-200 mt-4">{PROJECT_DESCRIPTION}</h3>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
