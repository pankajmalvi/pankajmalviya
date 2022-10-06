import React from 'react'

function SkillUsed({ skills }) {
    return (
        <div>
            {skills.map((skill, idx) =>
                <small key={idx}>{skill} </small>
            )}
        </div>
    )
}

export default SkillUsed