import {Button, ButtonExtendedProps, ResponsiveContext, TipProps} from "grommet";
import {Section} from "../../utils/types";
import React, {CSSProperties, useContext} from "react";

type SidebarButtonProps = ButtonExtendedProps & {
    section: Section;
    isSelectedButton: boolean;
    updateSelectedButton: (section: Section) => void;
};

const SidebarButtonComponent = ({icon, section, tip, isSelectedButton, updateSelectedButton}: SidebarButtonProps) => {
    const displaySize = useContext(ResponsiveContext);
    const isDisplaySmall = displaySize === "small";

    const centeredButtonStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const handleOnClickEvent = () => {
        updateSelectedButton(section);
    }

    const tipProps: TipProps = {
        content: tip,
        plain: false,
        dropProps: {
            align: {
                right: 'left',
            },
        }
    }

    return <Button
        icon={icon}
        tip={isDisplaySmall ? undefined : tipProps}
        hoverIndicator
        style={centeredButtonStyle}
        primary={isSelectedButton}
        onClick={() => handleOnClickEvent()}
        fill={false}
    />;
};

export default SidebarButtonComponent;