import ImageMoving from "./ImageMoving";

interface IconsSpaceProps2 {
    src1: string;
    src2: string;
}

export default function IconsSpace2({src1,src2}:IconsSpaceProps2){

    return(
        <div className="w-4/4 px-4 border border-black">
            <ImageMoving src={src1} translateX="icon-move"/> 
            <ImageMoving src={src2} translateX=""/>
        </div>
    )
}
