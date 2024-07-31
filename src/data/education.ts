type Education = {
    id: number
    name: string
    startDate: string
    endDate: string
    image: string
    description: string
    results: string
}

export const education: Education[] = [
    {
        id: 1,
        name: 'Northcoders',
        startDate: 'Apr 2024',
        endDate: 'Jul 2024',
        image: 'https://via.placeholder.com/150',
        description: 'A 13-week Intensive Software Development Bootcamp, focusing on Full-Stack Web Development, with a strong emphasis on JavaScript, React.js, Node.js, Express.js, and PostgreSQL.',
        results: ''
    },
    {
        id: 2,
        name: 'Durham University',
        image: 'https://via.placeholder.com/150',
        startDate: '2020',
        endDate: '2023',
        description: 'Studied a BSc in Natural Sciences, specializing in Physics and Chemistry. Achieved a 1st on my dissertation, "Surfactants in Cosmetics", discussing the chemical physics of surfactants in the cosmetic industry, their environmental and social impact and the potential for biosurfactants as more sustainable alternative.',
        results: '2:1 BSc with Joint Honours in Physics and Chemistry via Natural Sciences'
    },
    {
        id: 3,
        name: 'Truro and Penwith College',
        image: 'https://via.placeholder.com/150',
        startDate: '2018',
        endDate: '2020',
        description: 'Studied A-Levels in Physics, Chemistry, Mathematics and AS-Level French.',
        results: 'A* Physics, A* Chemistry, A* Mathematics, A French'
    }
]