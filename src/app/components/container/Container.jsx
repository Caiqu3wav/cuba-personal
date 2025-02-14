import Image from "next/image";
import "./Container.css"

export default function ContainerRep(props){
  return (
    <div className="hero-container w-[700px] mt-4 ml-8 lowtwo:ml-2 flex flex-col pl-3 pr-3 rounded-3xl pb-6">      {props.children}
    </div>
  );
};