import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Olá, eu sou
                <span className='font-semibold mx-2 text-white'>Fernando</span>
                👋
                <br />
                Desenvolvedor web
            </h1>
        );

    if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>

                    Trabalhei com as melhores empresas <br /> e adquiri muitas habilidades ao longo do caminho
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    Saber mais
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-xl'>
                Desenvolvi vários projetos com sucesso ao longo dos anos.. <br /> Venha dar uma olhada!
                </p>

                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                    ver Portfolio
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center mb-4'>
                    Quer saber mais? entre em contato!
                    <br />
                </p>

                <Link to='/contact' className='neo-brutalism-white neo-btn'>
                    Vamos conversar
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    return null;
};

export default HomeInfo;
