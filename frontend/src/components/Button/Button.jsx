import React from 'react';

export function Button({ text = 'Aceptar', onClick }) {
    return (
        <button
            style={{
                backgroundColor: '#004D40',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
            }}
            onClick={onClick}
        >
            {text}
        </button>
    );
}