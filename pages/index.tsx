import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import Image from 'next/image';
import dev from '../public/assets/images/avatar.svg';
import code from '../public/assets/images/code.png';
import consulting from '../public/assets/images/consulting.png';
import design from '../public/assets/images/design.png';
import web1 from '../public/assets/images/web1.png';
import web2 from '../public/assets/images/web2.png';
import web3 from '../public/assets/images/web3.png';
import web4 from '../public/assets/images/web4.png';
import web5 from '../public/assets/images/web5.png';
import web6 from '../public/assets/images/web6.png';

export default function Home() {
  return (
      <main className='px-10'>
          <section className='min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl'>developed by jl</h1>
              <ul className='flex items-center'>
                <li className=' cursor-pointer text-xl'><BsFillMoonStarsFill /></li>
                <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
              </ul>
            </nav>
            <div className=' text-center p-10'>
              <h2 className=' text-6xl py-2  text-teal-600 font-medium'>
                Jigme Lodey
              </h2>
              <h3 className='text-2xl py-2'>Developer and Designer.</h3>
              <p className='text-md py-4 leading-8 text-gray-800'>
                I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
              </p>
            </div>
            <div className=' text-5xl flex justify-center gap-10 py-2 text-gray-600'>
              <AiFillGithub />
              <AiFillInstagram />
              <AiFillLinkedin />
              <AiFillMail />
            </div>
            <div className=' relative bg-gradient-to-b from-teal-500 to-white rounded-full w-80 h-80 mt-10 mx-auto'>
              <Image src={dev} alt='Portfoilo' layout='fill' objectFit='cover' className=' overflow-hidden '/>
            </div>
         </section>


         <section>
          <div className='text-center'>
              <h3 className='text-3xl py-1'>Services I Offer</h3>
              <p className='text-md py-2 leading-6 text-gray-800'>
              I'm a tech enthusiast with a passion for creating seamless digital experiences that make a difference. Whether it's designing an intuitive website, developing a user-friendly web-app, or crafting a beautiful mobile app, I use cutting-edge technologies and frameworks to bring my clients' ideas to life. As a seasoned Frontend Developer based in Bhutan, I have honed my skills through a diverse range of projects, from e-commerce platforms to social media apps, and everything in between. I have a deep understanding of user experience and user interface design, and I am committed to creating dynamic and engaging digital experiences that stand out in today's crowded online landscape. At my current position in a Bhutanese company, I have gained invaluable experience working collaboratively with other developers, product managers, and designers. This has allowed me to refine my skills and take on new challenges with confidence. Let's collaborate to create something truly exceptional! Whether you have a specific vision in mind or need guidance on your project's direction, I am here to help bring your digital dreams to life.
              </p>
          </div>
          <div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className='flex justify-center'>
               <Image alt='design' src={design} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className='flex justify-center'>
               <Image alt='design' src={code} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className='flex justify-center'>
               <Image alt='design' src={consulting} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
         </section>
         <section>
            <div>
              <h3 className='text-3xl py-1'>Portofolio</h3>
              <p >
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span> agencies </span>
              consulted for <span >startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p>
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
            </div>
            <div>
              <div className=''> 
                <Image alt='portfolio' src={web1}/>
              </div>
              <div className=''> 
                <Image alt='portfolio' src={web2}/>
              </div>
              <div className=''> 
                <Image alt='portfolio' src={web3}/>
              </div>
              <div className=''> 
                <Image alt='portfolio' src={web4}/>
              </div>
              <div className=''> 
                <Image alt='portfolio' src={web5}/>
              </div>
              <div className=''> 
                <Image alt='portfolio' src={web6}/>
              </div>
            </div>
         </section>
    </main>
  )
}
