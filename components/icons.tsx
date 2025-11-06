
import React from 'react';

export const ChariotWheelIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="2" x2="12" y2="9" />
    <line x1="12" y1="15" x2="12" y2="22" />
    <line x1="22" y1="12" x2="15" y2="12" />
    <line x1="9" y1="12" x2="2" y2="12" />
    <line x1="19.07" y1="4.93" x2="14.12" y2="9.88" />
    <line x1="9.88" y1="14.12" x2="4.93" y2="19.07" />
    <line x1="19.07" y1="19.07" x2="14.12" y2="14.12" />
    <line x1="9.88" y1="9.88" x2="4.93" y2="4.93" />
  </svg>
);

export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

export const PeacockFeatherIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
        <path d="M50 100C50 100 85 75 85 40C85 15 69.8528 5 50 5C30.1472 5 15 15 15 40C15 75 50 100 50 100Z" fill="url(#paint0_radial_1_2)"/>
        <circle cx="50" cy="40" r="15" fill="url(#paint1_radial_1_2)"/>
        <circle cx="50" cy="40" r="8" fill="#2E3192"/>
        <path d="M50 99.5V5" stroke="#FBB03B" strokeWidth="1"/>
        <defs>
            <radialGradient id="paint0_radial_1_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 40) rotate(90) scale(60 35.3553)">
                <stop stopColor="#00AEEF"/>
                <stop offset="1" stopColor="#006838"/>
            </radialGradient>
            <radialGradient id="paint1_radial_1_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 40) rotate(90) scale(15)">
                <stop stopColor="#FBB03B"/>
                <stop offset="1" stopColor="#F15A24"/>
            </radialGradient>
        </defs>
    </svg>
);

