import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid;
    border-radius: 5px;
    padding: 10px;
    width: 50%;
    margin: auto;
`

export const BinaryText = styled.input`
    width: 50%;
    font-size: 18px;
    margin-left: 10px;
    margin-bottom: 10px;
    border: 1px solid;
    padding: 10px;
    border-radius: 5px;
    
    outline: none;
    &:focus {
    border: 1px solid blue;
    }
`

export const DecimalText = styled.input`
    width: 50%;
    font-size: 18px;
    margin-left: 10px;
    margin-bottom: 10px;
    border: 1px solid;
    padding: 10px;
    border-radius: 5px;
`

export const Button = styled.button`
    width: 30%;
    margin-bottom: 10px;
    margin-left: 10px;
    padding: 10px;
    border: 1px solid;
    border-radius: 2px;
    font-size: 18px;
    cursor: pointer;
    
    &:hover {
        border: 1px solid blue;
        color: blue;
    }
`

export const Label = styled.span`
    margin: 10px;
    font-size: 18px;
    font-family: 'Roboto';
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
`