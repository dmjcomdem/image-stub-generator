import styled from '@emotion/styled';
import React from 'react';

import { ReactComponent as LogoSVG } from '@/assets/logo.svg';

export const H1Styled = styled.h1`
    user-select: none;
    margin: 0;
    padding: 0;
    width: max-content;
`;

export const Logo: React.FC = () => {
    return (
        <H1Styled>
            <span className="visually-hidden">Приложение для генерации статических изображений</span>
            <LogoSVG width="396" height="79" />
        </H1Styled>
    );
};
