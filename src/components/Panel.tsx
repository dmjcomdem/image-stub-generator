import { css } from '@emotion/react';
import styled from '@emotion/styled';

import superEllipse from '@/assets/img/super-ellipse.svg';

export const Box = styled.div`
    width: 507px;
    height: 62px;
    display: flex;
    align-items: center;
    padding: 0 35px;
    background-image: url(${superEllipse});
    background-repeat: no-repeat;
`;

type PanelType = {
    columns: string;
    split?: boolean;
    gap?: number;
};

export const Panel = styled(Box)<PanelType>`
    display: grid;
    grid-template-columns: ${props => props.columns};
    align-items: center;
    position: relative;

    ${({ gap }) =>
        gap &&
        css`
            grid-gap: ${gap}px;
        `}
`;
