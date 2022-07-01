import React, { useEffect } from 'react';
import bg from '../../Assests/images/banner.jpg'
import clock from '../../Assests/images/clock.svg'
import finish from '../../Assests/images/finish.png'
import DownloadingIcon from '@mui/icons-material/Downloading';
import useTodoHook from '../../Hooks/TodoHook';
import useComplete from '../../Hooks/CompleteTaks';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
    const [tasks] = useTodoHook();
    const [complete] = useComplete()
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, [])
    return (
        <div className='bg-gradient-to-t from-[#F9F8F3] via-[#F6F8F0] to-[#F6F8F0] z-0'>
            <div className='grid grid-cols-2 bg-gradient-to-t from-[#F9F8F3] via-[#F9F9F1] to-[#F6F8F0]'>
                <div className=' my-auto pl-20' data-aos="fade-right">
                    <h1 className='text-6xl font-bold tracking-widest '>Work more <br /> Structured <span className='block'>and Organized</span></h1>
                    <p className='py-5'>Good planning will lead to a better work. Plan work, keep projects on track.</p>
                    <button type="button" className="inline-block px-6 py-2.5 bg-primary-shade-600 text-base-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-shade-700 hover:shadow-lg focus:bg-primary-shade-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-shade-800 active:shadow-lg transition duration-150 ease-in-out">Explore More</button>
                </div>
                <div className='' data-aos="fade-left">
                    <img src={bg} alt="" />
                </div>
            </div>
            <div className='md:flex justify-center'>
                <div className='flex justify-around bg-[#E1EBD3] p-5 rounded-xl w-96 mr-10'
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className='text-primary text-2xl w-20'>

                        <img src={clock} alt="" />
                    </div>
                    <div>
                        <h2 className='text-2xl'>Total Peding tasks</h2>
                        <h2 className='text-6xl text-primary font-bold text-center'>{tasks.length}</h2>
                    </div>
                </div>
                <div className='flex justify-around bg-[#E1EBD3] p-5 rounded-xl w-96'
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className='text-primary text-2xl w-24'>

                        <img src={finish} alt="" />
                    </div>
                    <div>
                        <h2 className='text-2xl'>Total Completed Tasks</h2>
                        <h2 className='text-6xl text-primary font-bold text-center'>{complete.length}</h2>
                    </div>
                </div>
            </div>
            <div className='px-20 py-20'>
                <h2 className='text-2xl font-bold pb-10'>Pending Task</h2>
                <div className='grid gap-10 grid-cols-3  '>

                    {
                        tasks.map(t =>
                            <div key={t._id} className='flex justify-evenly text-base-100 bg-[#FF7461] p-3 rounded-lg hover:bg-[#F9AB48]' data-aos="zoom-in">
                                <DownloadingIcon></DownloadingIcon>
                                <p>{t.name}</p>
                                <p>{t.deadline}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;

