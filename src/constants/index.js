import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Estagiário Fullstack",
        company_name: "Renault Group",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Fev 2023 - Atual",
        points: [
            "Arquiteto sistemas de back-end usando Java ou python",
            "integração de APIs externas para obtenção e envio de dados em tempo real.",
            "Uso das principais ferramentas de backend como Node.js, Django , Express.js, ASP.NET Core e etc.",
            "Otimização de desempenho de páginas da web através do carregamento assíncrono de recursos",
            "Desenvolvimento de scripts e programas para automação de processos em Python",
            "Desenvolvimento de aplicações Web junto com o time do frontend",
        ],
    },
    {
        title: "Estagiário de Engenharia Digital",
        company_name: "Sig Group",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Març 2022 - Fev 2023",
        points: [
            "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.",
            "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade.",
            "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
            "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
        ],
    },
    
        
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Fpereiraaraujo',  
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/fernando-araujo-6704a423a/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Rastreador de preços da Amazonr',
        description: 'Desenvolvi um aplicativo web que rastreia e notifica os usuários sobre alterações de preços de produtos na Amazon, ajudando os usuários a encontrar as melhores ofertas.',
        link: '/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack RenaultBook',
        description: 'Concebi e desenvolvi, tanto o frontend quanto o backend, uma rede social completa para aprimorar a comunicação entre os colaboradores, promovendo interatividade e conexão entre a equipe..',
        link: 'https://renault-book.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'LiveLingo',
        description: 'LiveLingo é um aplicativo de tradução em tempo real que traduz mensagens instantaneamente',
        link: 'https://livelingo-xi.vercel.app/chat',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Projetei e construí um aplicativo móvel para encontrar e comparar carros no mercado, agilizando o processo de compra de carros.',
        link: 'https://showcase-carhub.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Clone Minecraft - Python',
        description: 'Desenvolvi um modelo de jogo semelhante ao minecraft em python',
        link: 'https://github.com/Fpereiraaraujo/MINECRAFT-----PYTHON',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Metaversos',
        description: 'transformei um design Figma em um site totalmente funcional usando Next13, Framer Motion e Tailwind CSS, com tematica metaversos!',
        link: 'https://metaversusmadness.com/',
    },
];