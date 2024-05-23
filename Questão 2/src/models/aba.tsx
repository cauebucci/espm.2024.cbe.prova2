import React from "react";

export interface AbaProps {
    children?: React.ReactNode;
    titulo: string;
}

function Aba(props: AbaProps) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default Aba;