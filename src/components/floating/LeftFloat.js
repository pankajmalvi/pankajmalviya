import React from 'react'
import CodepenLink from '../common/icons/CodepenLink'
import GithubLink from '../common/icons/GithubLink'
import InstagramLink from '../common/icons/InstagramLink'
import LinkedInLink from '../common/icons/LinkedInLink'
import TwitterLink from '../common/icons/TwitterLink'

function LeftFloat() {
    return (
        <article className="float-left">
            <GithubLink />
            <InstagramLink />
            <TwitterLink />
            <LinkedInLink />
            <CodepenLink />
        </article>
    )
}

export default LeftFloat