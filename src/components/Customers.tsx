import { useRef } from 'react';
import './Customers.scss';
import logo1 from '../assets/company_logos/customer1.svg';
import logo2 from '../assets/company_logos/customer2.svg';
import logo3 from '../assets/company_logos/customer3.svg';
import logo4 from '../assets/company_logos/customer4.svg';
import logo5 from '../assets/company_logos/customer5.svg';

const COMPANY_DATA = [
  { id: 1, img: logo1, label: 'LOGOIPSUM', delay: 0 },
  { id: 2, img: logo2, label: 'LOGOIPSUM', delay: 200 },
  { id: 3, img: logo3, label: 'LOGOIPSUM', delay: 100 },
  { id: 4, img: logo4, label: 'LOGOIPSUM', delay: 300 },
  { id: 5, img: logo5, label: 'LOGOIPSUM', delay: 400 }
];

const Customers = () => {
  const sectionEl = useRef<HTMLElement>(null);

  return (
    <section ref={sectionEl} className="companys">
      <div className="companys__container">
        <div className="companys__grid">
          {COMPANY_DATA.map((company) => (
            <div
              key={company.id}
              className="companys__card"
              data-aos="fade-right"
              data-aos-delay={company.delay}
            >
              <img
                src={company.img}
                alt="notfound"
                className="companys__logo-img"
              />
              <p className="companys__text">{company.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
