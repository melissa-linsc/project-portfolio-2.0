export type Skill = {
    id: number
    name: string
    image: string
    type: string
}

export const skills: Skill[] = [
    {
        id: 1,
        name: 'JavaScript',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png',
        type: 'language'
    },
    {
        id: 2,
        name: 'HTML',
        image: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png',
        type: 'frontend'
    },
    {
        id: 3,
        name: 'CSS',
        image: 'https://static-00.iconduck.com/assets.00/file-type-css-icon-902x1024-dqy5inwy.png',
        type: 'frontend'
    },
    {
        id: 4,
        name: 'TypeScript',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
        type: 'language'
    },
    {
        id: 5,
        name: 'React',
        image: 'https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png',
        type: 'frontend'
    },
    {
        id: 6,
        name: 'Express',
        image: 'https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png',
        type: 'backend'
    },
    {
        id: 7,
        name: 'SQL',
        image: 'https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.png',
        type: 'backend'
    },
    {
        id: 8,
        name: 'Jest',
        image: 'https://avatars.githubusercontent.com/u/103283236?v=4',
        type: 'testing'
    }
]