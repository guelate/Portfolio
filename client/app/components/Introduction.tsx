import Biography from "./Biography";
import IconsSpace1 from "./IconsSpace1";
import IconsSpace2 from "./IconsSpace2";

export default function Introduction() {
  return (
    <div>
      <IconsSpace2
        src1={"https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconPostgres.png"}
        src2={"https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconReactNative.png"}
      />
      <div className="h-auto flex">
        <IconsSpace1
          src1="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconDocker.png"
          src2="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconTypescript.png"
          src3="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconJavascript.png"
        />
        <Biography />
        <IconsSpace1
          src1="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/iconGitlab.png"
          src2="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconTaiwlindCss.png"
          src3="https://raw.githubusercontent.com/guelate/Portfolio/main/client/public/IconK8s.png"
        />
      </div>
    </div>
  );
}
