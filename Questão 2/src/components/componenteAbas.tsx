import React, { useState } from "react";
import { AbaProps } from "../models/aba";
import { Button } from "react-bootstrap";

interface ComponenteAbasProps {
    children?: React.ReactElement<AbaProps>[];
}

function ComponenteAbas({ children }: ComponenteAbasProps) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div style={{
            textAlign: "center"
        }}>
            <div>
                {children.map((child, index) => (
                    <div style={{
                        margin: "10px",
                        display: "inline-block"
                    }}>
                        <Button
                            key={index}
                            className={index === activeTab ? "active" : ""}
                            onClick={() => setActiveTab(index)}
                        >
                            {child.props.titulo}
                        </Button>
                    </div>
                ))}
            </div>
            <div style={{
                marginTop: "100px"
            }}>
                {children[activeTab]}
            </div>
        </div>
    );
}


export default ComponenteAbas;