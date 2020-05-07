import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import {
    Container,
    BinaryText,
    Label,
    Button,
    DecimalText,
    Field
  } from './styles'

const App = () => {
    const [binary, setBinary] = useState('')
    const [decimal, setDecimal] = useState('')
    const [error, setError] = useState('')

    const handleConversion = () => {
        if (binary.match(/^[0-1]{1,8}$/g) === null) {
            setError('Enter up to 8 binary digits (0 or 1)')
            return
        }

        setError('')

        const reversedBinary = binary
            .split('')
            .map(Number)
            .reverse()

        const result = reversedBinary.reduce(
            (accumulator, currentValue, index) => accumulator + currentValue * Math.pow(2, index)
        )

        setDecimal(result)
    }

    return (
        <>
        <Container>
            {error && <span style={{ color: 'red' }}>{error}</span>}
            <br />
            <Field>
            <Label>Binary Input</Label>
            <div>
                <BinaryText
                autoComplete="off"
                type="text"
                name="binary"
                placeholder="Enter 0 or 1"
                value={binary}
                onChange={e => setBinary(e.target.value)}
                />
                <Button onClick={() => handleConversion()}>Convert</Button>
            </div>
            </Field>
            <Field>
            <Label>Decimal Output</Label>
            <DecimalText
                type="text"
                name="decimal"
                value={decimal}
                disabled
            />
            </Field>
        </Container>
        </>
    )
}

const ROOT = document.getElementById('root')
ReactDOM.render(<App />, ROOT)