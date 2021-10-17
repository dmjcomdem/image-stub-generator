import { saveAs } from 'file-saver';
import * as HTMLToImage from 'html-to-image';
import React from 'react';

import { ReactComponent as Line } from '@/assets/icons/line.svg';
import { ReactComponent as TextIcon } from '@/assets/icons/text.svg';
import { ButtonDownload, ColorPicker, Logo, Panel, SizeControls, TextFill, ViewBoard } from '@/components';
import { GlobalStyles } from '@/styles/global';

export const App: React.FC = () => {
    const [color, setColor] = React.useState('#a4a4a4');
    const [text, setText] = React.useState('Placeholder {size}');
    const [width, setWidth] = React.useState(700);
    const [height, setHeight] = React.useState(400);
    const [format, setFormat] = React.useState('');
    const refBoard = React.useRef() as React.MutableRefObject<HTMLDivElement>;

    React.useEffect(() => {
        const sizeFormat = `${width}×${height}`;

        if (!text) {
            return setFormat(sizeFormat);
        }

        if (text.includes('{size}')) {
            const replaceText = text.replace(/{size}/g, sizeFormat);
            setFormat(replaceText);
        } else {
            setFormat(text);
        }
    }, [text, width, height]);

    const onDownload = () => {
        HTMLToImage.toPng(refBoard.current, { quality: 1 }).then(blob => saveAs(blob, `${format}.png`));
    };

    const onResize = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setWidth(event.currentTarget.clientWidth);
        setHeight(event.currentTarget.clientHeight);
    };

    return (
        <main className="layout">
            <GlobalStyles />

            <div className="layout__logo">
                <Logo />
            </div>

            <div className="layout__view-board">
                <ViewBoard
                    ref={refBoard}
                    color={color}
                    width={width}
                    height={height}
                    onResize={onResize}
                    text={format}
                />
            </div>

            <div className="layout__controls">
                <Panel columns="40px 1fr">
                    <TextIcon />
                    <TextFill onChange={setText} value={text} placeholder="Enter text to placeholder " />
                </Panel>

                <Panel columns="40px 1px 1fr 1px 40px" gap={40}>
                    <ColorPicker color={color} onChange={setColor} />
                    <Line />
                    <SizeControls width={width} height={height} onWidth={setWidth} onHeight={setHeight} />
                    <Line />
                    <ButtonDownload onDownload={onDownload} />
                </Panel>
            </div>
        </main>
    );
};
