import "./index.css";
import { Composition } from "remotion";
import { HelloWorld, myCompSchema } from "./HelloWorld";
import { Logo, myCompSchema2 } from "./HelloWorld/Logo";
import { Episode01 } from "./compositions/Episode01";
import { Episode02 } from "./compositions/Episode02";
import { Episode03 } from "./compositions/Episode03";
import { Episode07 } from "./compositions/Episode07";
import { Episode04 } from "./compositions/Episode04";
import { Episode05 } from "./compositions/Episode05";

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

      {/* Episode01 - 第1集：序幕 - 货币的本质 */}
      <Composition
        id="Episode01"
        component={Episode01}
        durationInFrames={360 * 30} // 6 minutes @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Episode02 - 第2集：罗斯柴尔德家族："大道无形"的世界首富 */}
      <Composition
        id="Episode02"
        component={Episode02}
        durationInFrames={780 * 30} // 13 minutes @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Episode03 - 第3集：滑铁卢战役 - 信息与金钱的战争 */}
      <Composition
        id="Episode03"
        component={Episode03}
        durationInFrames={360 * 30} // 6 minutes @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Episode07 - 第7集：美联储成立 - 哲基尔岛密谋 */}
      <Composition
        id="Episode07"
        component={Episode07}
        durationInFrames={480 * 30} // 8 minutes @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Episode04 - 第4集：美联储——私有的中央银行 */}
      <Composition
        id="Episode04"
        component={Episode04}
        durationInFrames={840 * 30} // 14 minutes @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      {/* Episode05 - 第5集：一战与大衰退——国际银行家的"丰收时节" */}
      <Composition
        id="Episode05"
        component={Episode05}
        durationInFrames={900 * 30} // 15 minutes @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
