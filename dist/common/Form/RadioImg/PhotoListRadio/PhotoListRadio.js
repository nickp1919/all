import React, { useState } from 'react';
import { ReactComponent as OpenBigSvg } from "../../../../assets/show-big-photo.svg";
import { isArrayCount } from "../../../../utils";
import { ShowBigPhotoModal } from "../../../../modals";
import { FilesPhotoDiv, FilesPhotoItemDiv, FilesPhotoItemBGDiv, CheckCircleWhiteSvg, OpenBigPhotoDiv, } from './styled';
const PhotoListRadio = ({ photos, checked, onClick }) => {
    if (!isArrayCount(photos)) {
        return null;
    }
    const [modalVisible, setModalVisible] = useState(false);
    return (React.createElement(FilesPhotoDiv, null, photos.map((file) => {
        const { id, link } = file;
        return (React.createElement(FilesPhotoItemDiv, { key: id },
            React.createElement(FilesPhotoItemBGDiv, { img: link, checked: checked, onClick: () => onClick() }, checked && (React.createElement(React.Fragment, null,
                React.createElement("div", null),
                React.createElement(CheckCircleWhiteSvg, null)))),
            React.createElement(OpenBigPhotoDiv, { onClick: () => {
                    setModalVisible(true);
                } },
                React.createElement(OpenBigSvg, null)),
            modalVisible && (React.createElement(ShowBigPhotoModal, { visible: modalVisible, onClose: () => setModalVisible(false), img: link }))));
    })));
};
export default PhotoListRadio;
