import React from 'react';
import { StickerWidgetWrapper } from './StickerWidget.styles';

export default function StickerWidget({ fontColor, bgColor, width, icon, number, text }) {
  const textColor = {
    color: fontColor,
  };
  const widgetStyle = {
    backgroundColor: "#ffffff",
    width: width,padding: '8px 8px'
  };
  const iconStyle = {
    color: fontColor,
  };

  return (
    <StickerWidgetWrapper className="isoStickerWidget" style={widgetStyle}>
      <div className="isoIconWrapper" style={{backgroundColor:bgColor}}>
        {icon}
      </div>

      <div className="isoContentWrapper">
        <h3 className="isoStatNumber" style={textColor}>
          {number}
        </h3>
        <span className="isoLabel" style={textColor}>
          {text}
        </span>
      </div>
    </StickerWidgetWrapper>
  );
}
