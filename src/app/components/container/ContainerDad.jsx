
export default function ContainerDad(props) {
    return (
        <div className="flex gap-[70px] midthree:gap-[15px] big:gap-[20%]">
        {props.children}
        </div>
    );
}