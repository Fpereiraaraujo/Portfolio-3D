import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Tem algum projeto em mente? <br className='sm:block hidden' />
        Vamos construí-lo juntos!
      </p>
      <Link to='/contact' className='btn'>
        Contato
      </Link>
    </section>
  );
};

export default CTA;
