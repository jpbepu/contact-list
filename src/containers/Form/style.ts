import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    margin: 16px 0;
    
    input{
        background-color: ${colors.bg2};
        border-radius: 4px;
        border: 0px;
        color: white;
        height: 32px;
        padding: 8px;
        margin-right: 16px;
        font-size: 16px;
        outline: none;

        &:focus{
            background-color: ${colors.primary};
        }
    }


    button{
        background-color: ${colors.primary};
        color: aliceblue;
        border-radius: 4px;
        border: 0px;
        height: 36px;
        padding: 8px;
    }
`

