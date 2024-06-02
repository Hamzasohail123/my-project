import { Form } from 'react-router-dom';
import Header from '../components/Header'
import {TestimonialList} from '../components/TestimonialList'
import Footer from '../components/Footer';
import './BecomeATutor.css';



export const BecomeATutor = () => {

    // const topBg = {
    //     backgroundImage: "url('https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg')",
    //     backgroundSize: 'cover',
    //     // backgroundPosition: 'center',
    // };

    return (
        <>
            <Header />
            
            {/* top section */}
            <div className='flex items-center ps-4 md:ps-20 h-[80vh] bg-no-repeat bg-cover bg-center bg-image-sm bg-image-lg  ' >
                <div className='border-0 border-red-500'>
                    <p className='text-[1.5rem] md:text-[3rem] font-bold leading-tight mb-2'>Come teach <br /> with us </p>
                    <p className='text-[1rem] md:text-[1.2rem] mb-4'>Become an instructor and change <br /> lives — including your own</p>
                    <button className='bg-[#3E4143] w-full py-3 text-white font-bold'>Get started</button>

                </div>

            </div>
            
            {/* 2nd section */}
            <div className='py-16 px-6'>
                <p className='text-[1.4rem] md:text-[2.4rem] font-bold mb-5 text-center'>So many reasons to start </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12'>
                    <div className='flex flex-col items-center p-3 md:p-7 border-0 border-red-500'>
                        <div className='h-[6rem] w-[6rem]'>
                            <img className='w-full h-full' src="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg" alt="" />
                        </div>
                        <p className='text-[1.1rem] md:text-[1.3rem] font-bold mb-2'>Teach your way</p>
                        <p className='text-[1rem] text-center mb-4'>Publish the course you want, in the way you want, and always have control of your own content.</p>
                    </div>
                    <div className='flex flex-col items-center p-3 md:p-7 border-0 border-red-500'>
                        <div className='h-[6rem] w-[6rem]'>
                            <img className='w-full h-full' src="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg" alt="" />
                        </div>
                        <p className='text-[1.1rem] md:text-[1.3rem] font-bold mb-2'>Teach your way</p>
                        <p className='text-[1rem] text-center mb-4'>Publish the course you want, in the way you want, and always have control of your own content.</p>
                    </div>
                    <div className='flex flex-col items-center p-3 md:p-7 border-0 border-red-500'>
                        <div className='h-[6rem] w-[6rem]'>
                            <img className='w-full h-full' src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg" alt="" />
                        </div>
                        <p className='text-[1.1rem] md:text-[1.3rem] font-bold mb-2'>Teach your way</p>
                        <p className='text-[1rem] text-center mb-4'>Publish the course you want, in the way you want, and always have control of your own content.</p>
                    </div>
                </div>
            </div>

            {/* 3rd section */}
            <div className='py-16 px-6 bg-[#5624D0] text-white'>
                <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 md:gap-12'>
                    <div className='flex flex-col items-center p-4 border-0 border-red-500'>
                        <p className='text-[2rem] md:text-[3rem] font-bold mb-1'>62M</p>
                        <p className='text-[1.3rem] text-center mb-1'>Students</p>
                    </div>
                    <div className='flex flex-col items-center p-4 border-0 border-red-500'>
                        <p className='text-[2rem] md:text-[3rem] font-bold mb-1'>75+</p>
                        <p className='text-[1.3rem] text-center mb-1'>Languages</p>
                    </div>
                    <div className='flex flex-col items-center p-4 border-0 border-red-500'>
                        <p className='text-[2rem] md:text-[3rem] font-bold mb-1'>830M</p>
                        <p className='text-[1.3rem] text-center mb-1'>Enrollments</p>
                    </div>
                    <div className='flex flex-col items-center p-4 border-0 border-red-500'>
                        <p className='text-[2rem] md:text-[3rem] font-bold mb-1'>180+</p>
                        <p className='text-[1.3rem] text-center mb-1'>Countries</p>
                    </div>
                    <div className='flex flex-col items-center p-4 border-0 border-red-500'>
                        <p className='text-[2rem] md:text-[3rem] font-bold mb-1'>15,000+</p>
                        <p className='text-[1.3rem] text-center mb-1'>Enterprise customers</p>
                    </div>

                </div>
            </div>

            {/* 4th section */}
            <div className='relative flex items-center justify-center flex-col py-[4rem] lg:py-[12rem] overflow-hidden border-0 border-red-500'>
                <div className='static lg:absolute -left-[9rem] border-0 border-red-500'>
                    <img className='h-[27rem] w-[27rem] ' src="https://s.udemycdn.com/teaching/support-1-v3.jpg" alt="" />
                </div>
                <div className='w-[90%] lg:w-[50%] px-5 md:px-10 mt-10 lg:mt-0 border-0 border-red-500'>
                    <p className='text-[1.4rem] md:text-[2.4rem] font-bold mb-5 text-center'>You won’t have to do it alone</p>
                    <p className='text-[1rem] md:text-[1.3rem] mb-5 text-center'>Our Instructor Support Team is here to answer your questions and review your test video, while our Teaching Center gives you plenty of resources to help you through the process. Plus, get the support of experienced instructors in our online community.

                    </p>
                    <a href=""><p className='text-[.8rem] md:text-[1.1rem] text-purple-800 font-bold mb-5 text-center'>Need more detail before you start? learn more</p></a>
                </div>
                <div className='hidden lg:block absolute -right-[9rem] border-0 border-red-500'>
                    <img className='h-[27rem] w-[27rem]' src="https://s.udemycdn.com/teaching/support-2-v3.jpg" alt="" />
                </div>
            </div>
            
            {/* 5th section */}
            <TestimonialList />

            {/* form */}
            {/* <Form /> */}

            <Footer />

        </>
    );
};