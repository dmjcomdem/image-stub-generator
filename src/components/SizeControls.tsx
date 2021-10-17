import styled from '@emotion/styled';
import React from 'react';

import { ReactComponent as XIcon } from '@/assets/icons/x.svg';

export const SizeControlsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 10px 1fr;
    align-items: center;
    user-select: none;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        display: none;
    }
`;

type SizeControlsType = {
    width: number;
    height: number;
    onWidth: (size: number) => void;
    onHeight: (size: number) => void;
};

export const SizeControls: React.FC<SizeControlsType> = ({ width, height, onWidth, onHeight }) => {
    const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onWidth(Number(event.target.value));
    };

    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onHeight(Number(event.target.value));
    };

    return (
        <SizeControlsWrapper>
            <input value={width} onChange={handleWidthChange} type="number" min="0" />
            <XIcon />
            <input value={height} onChange={handleHeightChange} type="number" min="0" />
        </SizeControlsWrapper>
    );
};
