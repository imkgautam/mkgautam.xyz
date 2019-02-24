import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby'

export default () => (
    <StaticQuery
        query={graphql`
            query {
                contentJson {
                    footer {
                        LinkedIn
                        Github
                        Twitter
                        Email
                    }
                }
            }
        `}
        render={data => (
            <footer className='m-auto text-center my-12 border-t border-grey-light tracking-wide'>
                <div className='mt-8'>
                    <ul className='list-reset inline-flex'>
                        {Object.keys(data.contentJson.footer).map((x, i) =>
                            <li key={i} className={Object.keys(data.contentJson.footer).length !== (i + 1) ? 'px-2 border-r border-grey-light' : 'px-2'}>
                                <a href={data.contentJson.footer[x]} target='_blank' rel='noopener noreferrer'>{x}</a>
                            </li>
                        )}
                    </ul>
                </div>
                <div className='mt-4'>
                    <sub className='text-2xl'>&copy;</sub> 2019 <Link to='/'>Manindra Gautam</Link>. All rights reserved.
                </div>
            </footer>
        )}
    />
)