import React from 'react';
import { ReactComponent as GlassesIcon } from "../../assets/glasses.svg";
import { ReactComponent as MagicIcon } from "../../assets/magic.svg";
const ICONS = {
    glasses: React.createElement(GlassesIcon, null),
    magic: React.createElement(MagicIcon, null),
};
import { TitleBlock } from "../../modules";
import { isString } from "../../utils";
import { FONT_VARIANTS, TITLE_SIZE } from "../../globalStyled";
import { StubWrapDiv, StubContentDiv, StubTextBlock } from './styled';
const Stub = ({ title = 'раздел-невидимка', description = 'пока что вам недоступен просмотр данного раздела платформы', icon, extraBodyRegular = false, }) => {
    const descriptionFont = extraBodyRegular
        ? FONT_VARIANTS.extraBodyRegular
        : FONT_VARIANTS.body1Regular;
    const Icon = icon ? (isString(icon) ? ICONS[icon] : icon) : null;
    return (React.createElement(StubWrapDiv, null,
        Icon,
        React.createElement(StubContentDiv, null,
            React.createElement(TitleBlock, { size: TITLE_SIZE.h3 }, title),
            React.createElement(StubTextBlock, { variant: descriptionFont }, description))));
};
export default Stub;
