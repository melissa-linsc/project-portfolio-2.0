type WorkExperience = {
    id: number
    name: string
    startDate: string
    endDate: string
    image: string
    title: string
    description: string
}

export const workExperience: WorkExperience[] = [
    {
        id: 1,
        name: 'TouchByte - Salto Systems',
        startDate: 'Jul 2024',
        endDate: 'Present',
        image: 'https://via.placeholder.com/150',
        title: 'Junior Software Engineer',
        description: 'Software Development work on Salto Orion, a facial recognition and access control system that allows users to unlock doors with their face.'
    },
    {
        id: 2,
        name: 'Probus Surgery and Surgical Centre',
        startDate: '2023',
        endDate: '2024',
        image: 'https://via.placeholder.com/150',
        title: 'Administrative Assistant',
        description: 'Worked as an Administrative Assistant at a private surgical centre and NHS GP surgery, managing meetings, finances and liaising with patients and medical staff. Also worked on reception to greet patients.'
    },
    {
        id: 3,
        name: 'Patch Magazine',
        startDate: '2020',
        endDate: 'Present',
        image: 'https://via.placeholder.com/150',
        title: 'Illustrator',
        description: 'Digital illustration work for Patch Magazine, a small UK women-led magazine, showcasing indie games, creating artwork for articles, social media and events.'
    },
    {
        id: 4,
        name: 'Content Creation',
        startDate: '2021',
        endDate: 'Present',
        image: 'https://via.placeholder.com/150',
        title: 'Content Creator',
        description: 'Work with brands and companies to create content for social media, including photography and videography, to showcase various products and services. Achieved 35000 total followers and over 1 million likes, with multiple videos reaching 1-3 million views.'
    }
]