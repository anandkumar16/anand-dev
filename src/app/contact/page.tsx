"use client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {


	return (

        <div className='relative z-0 bg-black w-screen h-screen mt-12'>   
			<div className='text-white contact overflow-x-hidden pt-12 mt-8 ' id='contact'>
				<div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl' >
					<p className='font-light'>REACH OUT TO ME</p>
					<h2 className='text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>Contact.</h2>
					<form

						className='mt-12 flex flex-col gap-8'
					>
						<label className='flex flex-col'>
							<span className=' font-medium mb-4'>Your Name</span>
							<input
								type='text'
								name='name'
								value={""}
								placeholder="Enter your name"
								className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className=' font-medium mb-4'>Your email</span>
							<input
								type='email'
								name='email'
								value={""}
								placeholder="abc@gmail.com"
								className='py-4 px-6 rounded-lg  font-medium bg-gray-900'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className='font-medium mb-4'>Your Message</span>
							<textarea
								rows={4}
								name='message'
								value={""}
								
								placeholder='Do you have anything to say?'
								className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
								required
							/>
						</label>

				<button>submit</button>
					</form>
				</div>
				<ToastContainer />
			</div>
        </div>
	);
};

export default Contact;