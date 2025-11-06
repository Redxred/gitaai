// FIX: Populating the file with SVG icon components as it was previously empty/invalid.
import React from 'react';

export const PeacockFeatherIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 6c-2.93 2.93-3.33 8.04-1.33 10.67.57.75 1.25 1.33 2 1.33s1.43-.58 2-1.33c2-2.63 1.6-7.74-1.33-10.67" />
    <path d="M12 21a2 2 0 0 0 4 0" />
    <path d="M10 3a2 2 0 0 1 4 0" />
    <path d="M14 6a2 2 0 0 1-4 0" />
    <path d="M12 11c-2.5 2.5-2.5 6.5 0 9" />
    <path d="M12 11c2.5 2.5 2.5 6.5 0 9" />
  </svg>
);

export const SendIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export const ChariotWheelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m4.93 19.07 1.41-1.41" />
    <path d="m17.66 6.34 1.41-1.41" />
  </svg>
);

export const BackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

export const KrishnaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
        <style>
            {`
            .krishna-body { fill: #A0C4FF; }
            .krishna-hair { fill: #333; }
            .krishna-dhoti { fill: #FFD700; }
            .krishna-sash { fill: #FF6347; }
            .krishna-jewelry { fill: #FFD700; stroke: #B8860B; stroke-width: 0.5; }
            .krishna-flute { fill: #8B4513; }
            .peacock-feather-main { fill: #48D1CC; }
            .peacock-feather-eye { fill: #1E90FF; }
            .peacock-feather-center { fill: #000080; }
            @keyframes sway { 0%, 100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }
            @keyframes flute-glow { 0%, 100% { opacity: 0.8; } 50% { opacity: 1; } }
            .feather-animated { animation: sway 8s ease-in-out infinite; transform-origin: 90px 40px; }
            .flute-animated { animation: flute-glow 4s ease-in-out infinite; }
            `}
        </style>
        <g transform="translate(10, 20)">
            {/* Peacock Feather */}
            <g className="feather-animated">
                <path className="peacock-feather-main" d="M90,40 C50,0 130,0 90,40 Z" />
                <circle className="peacock-feather-eye" cx="90" cy="25" r="12" />
                <circle className="peacock-feather-center" cx="90" cy="25" r="5" />
            </g>
            {/* Head */}
            <circle className="krishna-body" cx="100" cy="60" r="20" />
            {/* Hair */}
            <path className="krishna-hair" d="M80,50 Q100,30 120,50 C125,60 120,70 110,75 C100,80 90,80 85,75 C80,70 75,60 80,50 Z" />
            {/* Body */}
            <path className="krishna-body" d="M90,80 C80,110 120,110 110,80 V150 H90 Z" />
            {/* Dhoti */}
            <path className="krishna-dhoti" d="M90,130 C70,140 130,140 110,130 V160 H90 Z" />
            <path className="krishna-sash" d="M88,125 H112 L115,140 H85 Z" />
            {/* Arms and Flute */}
            <g className="flute-animated">
                <rect className="krishna-flute" x="60" y="95" width="80" height="5" rx="2" />
            </g>
            <path className="krishna-body" d="M85,90 C70,95 70,105 85,100" />
            <path className="krishna-body" d="M115,90 C130,95 130,105 115,100" />
            {/* Jewelry */}
            <circle className="krishna-jewelry" cx="100" cy="120" r="5" />
            <rect className="krishna-jewelry" x="90" y="78" width="20" height="3" rx="1.5" />
        </g>
    </svg>
);