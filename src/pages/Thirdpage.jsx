import Header from '../components/Header'
import MultiStepForm from '../components/MultiStepForm';
import Footer from '../components/Footer';

export const Thirdpage = () => {
    return (
        <>
            <Header />

            {/* top section */}
            <div className='md:flex justify-center items-center border-0 border-red-500'>
                <div className='md:w-[50%] md:h-[34rem] flex flex-col justify-center py-14 px-5 md:p-12 bg-[#e1ddd2] border-0 border-red-500'>
                    <p className='text-[1.2rem] md:text-[2.3rem] font-bold mb-3 md:mb-6'>Prepare your students for their careers.</p>
                    <p className='text-[.8rem] md:text-[1.1rem] '>edX course library provides certificate programs from 250 leading universities and industry-leading organizations.</p>
                </div>
                <div className='md:w-[50%] h-full border-0 border-red-500'>
                    <img className='h-auto w-auto mx-auto' src="https://business.edx.org/wp-content/uploads/2023/09/EdX_logo-grid-split-screen_3x3_524_3x.png?resize=768,629" alt="" />
                </div>
            </div>

            {/* section 2*/}
            <div className='px-4 py-8 md:px-20 md:py-16 mt-6 md:mt-16 bg-[#FBFAF9]'>
                <div className='mb-8'>
                    <p className='text-[1.2rem] md:text-[2.1rem] font-bold mb-2 md:mb-4'>Boost employability</p>
                    <p className='text-[.8rem] md:text-[1rem] '>The edX course library is made of 3,500+ courses and certificates, and offers learners the opportunity to build 30,000 of the most job-critical skills.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='rounded border-0 border-red-500'>
                        <div className=''>
                            <img className='w-full h-auto' src="https://business.edx.org/wp-content/uploads/2023/09/EdX_Portfolio-Cards_Technology_368-1.jpg" alt="" />
                        </div>
                        <div className='px-4 py-4 border-[2px]'>
                            <p className='font-bold mb-2'>Technology</p>
                            <p className='mb-2'>Cloud computing</p>
                            <p className='mb-2'>Cybersecurity</p>
                            <p className='mb-2'>Python</p>
                            <p className='mb-2'>Software development</p>
                        </div>
                    </div>
                    <div className='rounded border-0 border-red-500'>
                        <div className=''>
                            <img className='w-full h-auto' src="https://business.edx.org/wp-content/uploads/2023/09/EdX_Portfolio-Cards_Phase-2_Data_368_@3x.jpg" alt="" />
                        </div>
                        <div className='px-4 py-4 border-[2px]'>
                            <p className='font-bold mb-2'>Technology</p>
                            <p className='mb-2'>Cloud computing</p>
                            <p className='mb-2'>Cybersecurity</p>
                            <p className='mb-2'>Python</p>
                            <p className='mb-2'>Software development</p>
                        </div>
                    </div>
                    <div className='rounded border-0 border-red-500'>
                        <div className=''>
                            <img className='w-full h-auto' src="https://business.edx.org/wp-content/uploads/2023/09/EdX_Portfolio-Cards_Phase-2_Finance_368_@3x.jpg?resize=768,288" alt="" />
                        </div>
                        <div className='px-4 py-4 border-[2px]'>
                            <p className='font-bold mb-2'>Technology</p>
                            <p className='mb-2'>Cloud computing</p>
                            <p className='mb-2'>Cybersecurity</p>
                            <p className='mb-2'>Python</p>
                            <p className='mb-2'>Software development</p>
                        </div>
                    </div>
                    <div className='rounded border-0 border-red-500'>
                        <div className=''>
                            <img className='w-full h-auto' src="https://business.edx.org/wp-content/uploads/2023/09/EdX_Portfolio-Cards_Communication_368-1.jpg" alt="" />
                        </div>
                        <div className='px-4 py-4 border-[2px]'>
                            <p className='font-bold mb-2'>Technology</p>
                            <p className='mb-2'>Cloud computing</p>
                            <p className='mb-2'>Cybersecurity</p>
                            <p className='mb-2'>Python</p>
                            <p className='mb-2'>Software development</p>
                        </div>
                    </div>
                    <div className='rounded border-0 border-red-500'>
                        <div className=''>
                            <img className='w-full h-auto' src="https://business.edx.org/wp-content/uploads/2023/09/EdX_Portfolio-Cards_AI_368-1.jpg" alt="" />
                        </div>
                        <div className='px-4 py-4 border-[2px]'>
                            <p className='font-bold mb-2'>Technology</p>
                            <p className='mb-2'>Cloud computing</p>
                            <p className='mb-2'>Cybersecurity</p>
                            <p className='mb-2'>Python</p>
                            <p className='mb-2'>Software development</p>
                        </div>
                    </div>
                    <div className='rounded border-0 border-red-500'>
                        <div className=''>
                            <img className='w-full h-auto' src="https://business.edx.org/wp-content/uploads/2023/09/EdX_Portfolio-Cards_Phase-2_Management_368_@3x.jpg" alt="" />
                        </div>
                        <div className='px-4 py-4 border-[2px]'>
                            <p className='font-bold mb-2'>Technology</p>
                            <p className='mb-2'>Cloud computing</p>
                            <p className='mb-2'>Cybersecurity</p>
                            <p className='mb-2'>Python</p>
                            <p className='mb-2'>Software development</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 3*/}
            <div className='lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 border-0 border-red-500'>
                    <div className='content-center py-14 px-5 md:p-12 bg-[#1F453D] border-0 border-red-500'>
                        <p className='text-white text-[1.2rem] md:text-[2.3rem] font-bold mb-3 md:mb-6'>Drive career outcomes</p>
                        <p className=' text-white text-[.8rem] md:text-[1.1rem] mb-3 md:mb-6'>Empower learners with on-demand courses in a library that caters to their individual needs and watch them take charge of their professional development.</p>
                        <button className='font-bold bg-[#FECF48] px-4 md:px-8 py-1 md:py-3'>Book a demo</button>
                    </div>
                    <div className='h-full border-0 border-red-500'>
                        <img className='h-auto w-auto mx-auto' src="https://business.edx.org/wp-content/uploads/2023/09/EdX_Campus_drive_390_@3x.jpg" alt="" />
                    </div>
                </div>
            </div>

            {/* section 4*/}
            <div className='px-4 py-8 md:px-20 md:py-16 mt-6 md:mt-16 bg-[#FBFAF9]'>
                <div className='mb-8'>
                    <p className='text-[1.2rem] md:text-[2.1rem] font-bold mb-2 md:mb-4'>how do you want to partner with us?</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='rounded border-[2px]'>
                        <div className='mt-8 mb-4'>
                            <img className='w-24 h-24 mx-auto' src="https://business.edx.org/wp-content/uploads/2023/09/edX-B2B_boot-camps_icon_structured-flexibility_94x94@2x.png" alt="" />
                        </div>
                        <div className='px-14 py-4 '>
                            <p className='text-[1.1rem] md:text-[1.3rem] font-bold mb-2 text-center'>Industry partnership</p>
                            <p className='mb-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, asperiores.</p>
                            <p className='font-bold mb-2 text-center '>learn more</p>
                            
                        </div>
                    </div>
                    <div className='rounded border-[2px]'>
                        <div className='mt-8 mb-4'>
                            <img className='w-24 h-24 mx-auto' src="https://business.edx.org/wp-content/uploads/2023/09/edX-B2B_boot-camps_icon_real-world-projects_94x94@2x.png" alt="" />
                        </div>
                        <div className='px-14 py-4 '>
                            <p className='text-[1.1rem] md:text-[1.3rem] font-bold mb-2 text-center'>University partnership</p>
                            <p className='mb-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, asperiores.</p>
                            <p className='font-bold mb-2 text-center '>learn more</p>
                            
                        </div>
                    </div>
                    <div className='rounded border-[2px]'>
                        <div className='mt-8 mb-4'>
                            <img className='w-24 h-24 mx-auto' src="https://business.edx.org/wp-content/uploads/2023/09/edX-B2B_boot-camps_icon_structured-flexibility_94x94@2x.png" alt="" />
                        </div>
                        <div className='px-14 py-4 '>
                            <p className='text-[1.1rem] md:text-[1.3rem] font-bold mb-2 text-center'>Government partnership</p>
                            <p className='mb-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, asperiores.</p>
                            <p className='font-bold mb-2 text-center '>learn more</p>
                            
                        </div>
                    </div>
                    <div className='rounded border-[2px]'>
                        <div className='mt-8 mb-4'>
                            <img className='w-24 h-24 mx-auto' src="https://business.edx.org/wp-content/uploads/2023/09/edX-B2B_boot-camps_icon_innovative-instruction_94x94@2x.png" alt="" />
                        </div>
                        <div className='px-14 py-4 '>
                            <p className='text-[1.1rem] md:text-[1.3rem] font-bold mb-2 text-center'>Affiliate partnership</p>
                            <p className='mb-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, asperiores.</p>
                            <p className='font-bold mb-2 text-center '>learn more</p>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>

            {/* section 5*/}
            <MultiStepForm/>
            
            <Footer/>


        </>
    );


}