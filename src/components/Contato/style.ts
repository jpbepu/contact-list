import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Card = styled.div`
    background-color: ${colors.primary};
    color: ${colors.text};
    padding: 32px;
    margin: 20px 0;
    border-radius: 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        margin-left: 16px;
        padding: 8px;
        font-size: 16px;
        border: 0px;
        border-radius: 4px;
        cursor: pointer;

        background-color: white;
    }

    h2{
     font-weight: bold;
    }

`

export const TextField = styled.textarea`
    display: block;
    height: 24px;
    width: 100%;
    margin: 16px 0;
    font-weight: bold;
    font-size: 20px;

    resize: none;
    border: none;
    background-color: transparent;


`