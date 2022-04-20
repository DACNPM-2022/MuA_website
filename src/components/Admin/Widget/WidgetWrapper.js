import React from 'react';
import { WidgetWrapper } from './Widget.style';

export default function WidgetWrapper1({ children, ...props }) {
  return (
    <WidgetWrapper className="isoWidgetsWrapper" {...props}>
      {children}
    </WidgetWrapper>
  );
}