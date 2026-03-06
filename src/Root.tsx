import "./index.css";
import { Composition } from "remotion";

// Documentary-style compositions
import { Episode01Documentary } from "./compositions/Episode01Documentary";
import { Episode02Documentary } from "./compositions/Episode02Documentary";
import { Episode03Documentary } from "./compositions/Episode03Documentary";
import { Episode04Documentary } from "./compositions/Episode04Documentary";

import { Episode06Documentary } from "./compositions/Episode06Documentary";
import { Episode07Documentary } from "./compositions/Episode07Documentary";
import { Episode08Documentary } from "./compositions/Episode08Documentary";
import { Episode09Documentary } from "./compositions/Episode09Documentary";
import { Episode10Documentary } from "./compositions/Episode10Documentary";
import { Episode11Documentary } from "./compositions/Episode11Documentary";
import { TrailerDocumentary } from "./compositions/TrailerDocumentary";
import { Episode05NewDocumentary } from "./compositions/Episode05NewDocumentary";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>

      {/* Documentary-style Episodes */}
      <Composition
        id="Episode01Documentary"
        component={Episode01Documentary}
        durationInFrames={10557} // 351.9秒 @ 30fps (基于实际配音时长)
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Episode02Documentary"
        component={Episode02Documentary}
        durationInFrames={12066} // 402.2秒 @ 30fps (基于实际配音时长)
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Episode03Documentary"
        component={Episode03Documentary}
        durationInFrames={13122} // 437.4秒 @ 30fps (基于实际配音时长)
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Episode04Documentary"
        component={Episode04Documentary}
        durationInFrames={840 * 30}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="Episode06Documentary"
        component={Episode06Documentary}
        durationInFrames={480 * 30}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Episode07Documentary"
        component={Episode07Documentary}
        durationInFrames={420 * 30}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Episode08Documentary"
        component={Episode08Documentary}
        durationInFrames={660 * 30}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Episode09Documentary"
        component={Episode09Documentary}
        durationInFrames={420 * 30}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Episode10Documentary"
        component={Episode10Documentary}
        durationInFrames={540 * 30}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Episode11Documentary"
        component={Episode11Documentary}
        durationInFrames={540 * 30}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrailerDocumentary"
        component={TrailerDocumentary}
        durationInFrames={2250} // 75秒 @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Episode05NewDocumentary"
        component={Episode05NewDocumentary}
        durationInFrames={350 * 30} // 350秒 @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};