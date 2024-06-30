import Biography from "./Biography";
import IconsSpace from "./IconsSpace";


export default function Introduction() {
  return (
    <div className="h-auto flex mt-40">
      <IconsSpace
        src1="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconDocker.png"
        src2="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconTypescript.png"
        src3="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconJavascript.png"
        src4="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconPostgres.png"
      />
      <Biography />
      <IconsSpace
        src1="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconGitlab.png"
        src2="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconTaiwlindCss.png"
        src3="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconK8s.png"
        src4="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconReactNative.png"
      />
    </div>
  );
}
