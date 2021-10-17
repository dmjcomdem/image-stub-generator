import { css, Global } from '@emotion/react';
import React from 'react';

import bgTail from '@/assets/img/bg-tail.svg';

export const GlobalStyles: React.FC = () => {
    return (
        <Global
            styles={css`
                :root {
                    --text-color: #2d2743;
                    --accent-color: #665ea2;
                    font-size: 62.5%;
                }

                * {
                    box-sizing: border-box;

                    &::after,
                    &::before {
                        box-sizing: inherit;
                    }
                }

                body {
                    margin: 0;
                    padding: 0;
                    min-height: 100vh;
                    font-family: system-ui, sans-serif;
                    font-size: 16px;
                    color: white;
                    background: linear-gradient(110deg, #171717 0.38%, #222222 100%);
                    overflow: hidden;
                }

                body::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    z-index: -1;
                    width: 100%;
                    height: 30vmax;
                    background-size: cover;
                    background-image: url(${bgTail});
                    pointer-events: none;
                }

                input {
                    all: unset;
                    width: 100%;
                    height: 36px;
                    font-family: inherit;
                    text-align: center;
                    color: #939393;
                    font-size: 16px;
                    font-weight: 500;
                    transition: color 0.2s;

                    &:focus {
                        outline: none;
                        color: white;
                    }

                    &::placeholder {
                        color: #494949;
                    }
                }

                .layout {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &__logo {
                        position: fixed;
                        z-index: 10;
                        margin: 0 auto;
                        top: 60px;
                    }

                    &__view-board {
                        margin-top: -120px;
                    }

                    &__controls {
                        position: fixed;
                        z-index: 10;
                        margin: 0 auto;
                        bottom: 60px;
                        display: grid;
                        grid-gap: 20px;
                    }
                }

                .visually-hidden {
                    border: 0;
                    clip: rect(0 0 0 0);
                    height: 1px;
                    margin: -1px;
                    overflow: hidden;
                    padding: 0;
                    position: absolute;
                    width: 1px;
                }
            `}
        />
    );
};
