'use client'

import React, { useReducer } from 'react';

interface State {
    count: number;
}

type Action = | { type: 'increment'} | { type: 'decrement'} | { type: 'reset'};

    const initialState = { count: 0};

    function reducer(state: State, action: Action): State {
        switch (action.type) {
            case 'increment': 
                return { count: state.count + 1 };
            case 'decrement': 
                return { count: state.count - 1 };
            case 'reset': 
                return initialState;
            default: 
                throw new Error("Unknown action type");
        }
    }

    export default function CounterComponent() {
        const [state, dispatch] = useReducer(reducer, initialState);

        return (
            <div>
                <p>Count: {state.count}</p>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
        )
    }


