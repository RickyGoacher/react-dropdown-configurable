import { CSSProperties, ReactElement, useState, useEffect, useRef } from "react";

interface DropdownInterface {
    buttonText: string;
    icon: {
        src: string;
        height: number;
        width: number;
        blurWidth: number;
        blurHeight: number;
    }
    iconStyles: CSSProperties;
    iconAlt?: string;
    contentStyles: CSSProperties;
    children: Array<ReactElement>;
    buttonStyles: CSSProperties;
}

const Dropdown = (props: DropdownInterface) => {

    const [getButtonState, setButtonState] = useState<boolean>(false);

    const ref = useRef<HTMLInputElement>(null);

    function outsideClickHandler(e:Event) {
        e.preventDefault();
        if (ref.current && !ref.current.contains(e.target as HTMLButtonElement)) {
            setButtonState(false);
        } 
    }

    useEffect(() => {
        window.addEventListener("mousedown", outsideClickHandler);
        return (() => {
            window.removeEventListener("mousedown", outsideClickHandler);
        });
    });

    const DropdownContent = props.children && props.children.map((item, index:number) => {
        return (
            <div className="item" key={index + Math.random()}>
                {item}
            </div>
        );
    });

    return (
        <div ref={ref} className={getButtonState ? "dropdown active" : "dropdown"}>
            <button className="button" onClick={() => setButtonState(!getButtonState)} style={props.buttonStyles}>{props.buttonText}<span><img src={props.icon.src} style={props.iconStyles} alt={props.iconAlt ? props.iconAlt : "Chevron"}/></span></button>
            <div className="content" style={props.contentStyles}>
                {DropdownContent}
            </div>
        </div>
    );
}

export default Dropdown;