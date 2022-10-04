import React from 'react'
import SkillBulletPoints from './SkillBulletPoints'

function Skills({ skills }) {
    return (
        <ul className='skill-category'>
            <SkillBulletPoints skillItem={skills["front-end"]} />
            <SkillBulletPoints skillItem={skills["programming-languages"]} />
            <SkillBulletPoints skillItem={skills["tools"]} />
        </ul>
    )
}

export default Skills


{/* To be added if needs to be categorize
    < li >
        Frontend:
        <SkillBulletPoints skillItem={skills["front-end"]} />
    </li >
    <li>
        Programming Languages:
        <SkillBulletPoints skillItem={skills["programming-languages"]} />
    </li>
    <li>
        Tools:
        <SkillBulletPoints skillItem={skills["tools"]} />
    </li>
*/}