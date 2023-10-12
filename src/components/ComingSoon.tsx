import React from 'react';

interface TextDisplayProps {
    text: string; // Define the type of the 'text' prop as a string
}

export default function ComingSoon({ text }: TextDisplayProps) {
    return (
        <div className="text-center flex items-center flex flex-col min-h-screen">
            <h1>{ text } coming soon</h1>
        </div>
    );
}