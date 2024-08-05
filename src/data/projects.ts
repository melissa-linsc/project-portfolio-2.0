export type Project = {
    id: number
    name: string
    image: string
    description: string
    link: string
    tags: string[]
    badge: string[]
}

export const projects: Project[] = [
    {
        id: 1,
        name: 'NC News',
        image: 'src/assets/images/nc-news/nc-news-thumbnail.png',
        description: 'A full-stack News App with a modern React UI that allows user interactions and utilizes an express.js backend RESTful API',
        link: 'https://www.google.com',
        tags: ['Full-Stack', 'React.js', 'Express.js', 'Web', 'PostgreSQL', 'API'],
        badge: ['NORTHCODERS']
    },
    {
        id: 2,
        name: 'Gamerly',
        image: 'src/assets/images/gamerly/gamerly-thumbnail.png',
        description: 'A mobile app, that gives personalised game recommendations based on user choices utilizing a machine learning algorithm and lets users connect with friends using live chat.',
        link: 'https://www.google.com',
        tags: ['Mobile', 'React Native', 'Firebase', 'Group Project', 'Express.js', 'Python', 'Flask'],
        badge: ['NORTHCODERS'],
    },
    {
        id: 3,
        name: 'Salto Orion',
        image: 'src/assets/images/orion/orion-thumbnail.png',
        description: 'A facial recognition and access control system that allows users to unlock doors with their face. ',
        link: 'https://www.google.com',
        tags: ['Python', 'Vue.js', 'Docker', 'Azure', 'Agile', 'Typescript', 'mySQL'],
        badge: ['TOUCHBYTE'],
    },
    {
        id: 4,
        name: 'Dictionary App',
        image: 'src/assets/dictionary-thumbnail.png',
        description: 'A simple dictionary app that allows users to search for definitions of words, view the meaning, an example sentence and hear the pronunciation.',
        link: 'https://www.google.com',
        tags: ['JavaScript', 'Web', 'API', 'HTML', 'CSS'],
        badge: ['PERSONAL'],
    }
]
