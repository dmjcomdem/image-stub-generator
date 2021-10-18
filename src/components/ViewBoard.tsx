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
    font-family: system-ui, sans-serif;

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
            data-testid="view-board"
        >
            <svg x="0" y="0" viewBox="0 0 250 21" width="100%">
                <foreignObject x="0" y="0" height="100%" width="100%">
                    {text}
                </foreignObject>
            </svg>
        </BoardStyled>
    );
});

ViewBoard.displayName = 'ViewBoard';

export { ViewBoard };
