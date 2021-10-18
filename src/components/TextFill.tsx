import React from 'react';

type TextFillType = {
    placeholder: string;
    value: string;
    onChange: (text: string) => void;
};

export const TextFill: React.FC<TextFillType> = props => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
    };

    return (
        <input {...props} onChange={handleChange} type="text" style={{ marginLeft: '-20px' }} data-testid="text-fill" />
    );
};
