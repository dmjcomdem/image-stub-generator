import styled from '@emotion/styled';
import invert from 'invert-color';
import React from 'react';

export const BoardStyled = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    text-align: center;
    overflow: hidden;
    resize: both;
    border-radius: 4px;
    user-select: none;

    svg {
        margin-top: 4px;
    }
`;

type BoardType = {
    onResize: (event: React.MouseEvent<HTMLDivElement>) => void;
    width: number;
    height: number;
    color: string;
    text: string;
};
const ViewBoard = React.forwardRef<HTMLDivElement, BoardType>(({ color, width, height, onResize, text }, ref) => {
    return (
        <BoardStyled
            onMouseMove={onResize}
            ref={ref}
            style={{
                backgroundColor: color,
                color: invert(color),
                width: width,
                height: height
            }}
        >
            <svg x="0" y="0" viewBox="0 0 250 20" width="100%" xmlns="http://www.w3.org/2000/svg">
                <foreignObject x="0" y="0" height="100%" width="100%">
                    <text>{text}</text>
                </foreignObject>
            </svg>
        </BoardStyled>
    );
});

ViewBoard.displayName = 'ViewBoard';

export { ViewBoard };
