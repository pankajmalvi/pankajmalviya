import React from 'react'
import CodepenLink from '../common/icons/CodepenLink'
import GithubLink from '../common/icons/GithubLink'
import InstagramLink from '../common/icons/InstagramLink'
import LinkedInLink from '../common/icons/LinkedInLink'
import TwitterLink from '../common/icons/TwitterLink'

function LeftFloat({ links }) {
    return (
        <article className="float-left">
            <GithubLink link={links.github} />
            <InstagramLink link={links.instagram} />
            <TwitterLink link={links.twitter} />
            <LinkedInLink link={links.linkedin} />
            <CodepenLink link={links.codepen} />
        </article>
    )
}

export default LeftFloat