import React from 'react'

function Logo() {
    return (

        <a href='#' className='nav-logo'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                version="1"
                viewBox="0 0 42 42"
            >
                <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M337.13 61.041l1.047 98.196-84.517 50.005-85.564-48.191-1.047-98.196 84.517-50.005z"
                    opacity="0.999"
                    transform="matrix(.21949 0 0 .20715 -34.446 -2.003)"
                ></path>
                <text
                    x="220.253"
                    y="146.111"
                    strokeWidth="3"
                    fontFamily="sans-serif"
                    fontSize="96.457"
                    style={{ lineHeight: "1.25" }}
                    transform="matrix(.21949 0 0 .20715 -34.446 -2.003)"
                >
                    <tspan x="220.253" y="146.111">
                        P
                    </tspan>
                </text>
            </svg>
        </a>
    )
}

export default Logo