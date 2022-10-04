import React from 'react'
import SkillPoint from './SkillPoint'

function SkillBulletPoints({ skillItem }) {
    return (
        <>
            {skillItem.map((skill, idx) => <SkillPoint skill={skill} key={idx} />)}
        </>
    )
}

export default SkillBulletPoints

{/*
For Category wise implementation 
<ul className="skill">
    {skillItem.map((skill, idx) => <SkillPoint skill={skill} key={idx} />)}
</ul> 
*/}