import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Box = styled.div`
    width: 507px;
    height: 62px;
    display: flex;
    align-items: center;
    padding: 0 35px;
    background-image: url('/src/assets/img/super-ellipse.svg');
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

    ${({ split }) =>
        split &&
        css`
            > * {
                position: relative;
            }

            > *:not(:first-child)::before {
                content: '';
                position: absolute;
                top: 4px;
                left: -25px;
                height: 80%;
                width: 1px;
                background-color: #444444;
            }
        `}

    ${({ gap }) =>
        gap &&
        css`
            grid-gap: ${gap}px;
        `}
`;
