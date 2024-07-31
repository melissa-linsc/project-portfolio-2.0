export type Project = {
    id: number
    name: string
    image: string
    description: string
    link: string
    tags: string[]
    badge: string
}

export const projects: Project[] = [
    {
        id: 1,
        name: 'NC News',
        image: 'https://via.placeholder.com/150',
        description: 'A full-stack News App with a modern React UI that allows user interactions and utilizes an express.js backend RESTful API',
        link: 'https://www.google.com',
        tags: ['Full-Stack', 'React.js', 'Express.js', 'Web'],
        badge: 'NORTHCODERS'
    },
    {
        id: 2,
        name: 'Gamerly',
        image: 'https://via.placeholder.com/150',
        description: 'A mobile app, that gives personalised game recommendations based on user choices utilizing a machine learning algorithm and lets users connect with friends using live chat.',
        link: 'https://www.google.com',
        tags: ['Mobile', 'React Native', 'Firebase', 'Group Project'],
        badge: 'NORTHCODERS',
    },
    {
        id: 3,
        name: 'Salto Orion',
        image: 'https://via.placeholder.com/150',
        description: 'A facial recognition and access control system that allows users to unlock doors with their face. ',
        link: 'https://www.google.com',
        tags: ['Mobile', 'React Native', 'Firebase', 'Group Project'],
        badge: 'WORK',
    }
]
