import "./index.css";
import { Composition } from "remotion";
import { HelloWorld, myCompSchema } from "./HelloWorld";
import { Logo, myCompSchema2 } from "./HelloWorld/Logo";
import { Trailer } from "./compositions/Trailer";

// Documentary-style compositions
import { Episode01Documentary } from "./compositions/Episode01Documentary";
import { Episode02Documentary } from "./compositions/Episode02Documentary";
import { Episode03Documentary } from "./compositions/Episode03Documentary";
import { Episode04Documentary } from "./compositions/Episode04Documentary";
import { Episode05Documentary } from "./compositions/Episode05Documentary";
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
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render HelloWorld
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        schema={myCompSchema}
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
          logoColor1: "#91EAE4",
          logoColor2: "#86A8E7",
        }}
      />

      {/* Mount any React component to make it show up in the sidebar and work on it individually! */}
      <Composition
        id="OnlyLogo"
        component={Logo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema2}
        defaultProps={{
          logoColor1: "#91dAE2" as const,
          logoColor2: "#86A8E7" as const,
        }}
      />

      {/* Trailer - 货币战争预告片 */}
      <Composition
        id="Trailer"
        component={Trailer}
        durationInFrames={75 * 30} // 75 seconds @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />

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
        id="Episode05Documentary"
        component={Episode05Documentary}
        durationInFrames={900 * 30}
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