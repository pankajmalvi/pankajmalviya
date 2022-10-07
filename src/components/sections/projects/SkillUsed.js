import React from 'react'

function SkillUsed({ skills }) {
    return (
        <ul className='project-skills-container'>
            {skills.map((skill, idx) =>
                <li key={idx}>
                    <small>{skill} </small>
                </li>
            )}
        </ul>
    )
}

export default SkillUsed