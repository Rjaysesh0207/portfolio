import Image from 'next/image'
import Me from "@/public/IMG_20230718_214945.jpg"

export default function Home() {
  return (
    <div className='divide-y divide-gray-100 dark:divide-gray-700'>
      <div className='space-y-2 pt-5 pb-8 md:space-x5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight
        text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13'>
          Home
        </h1>
      </div>

{/* TODO: Make sure to add a photo of you to this page */}
      <div className='items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
        <div className='flex flex-col items-center pt-8'>
          <Image alt='Picture of Ryan Nishimoto' src={Me} className='h-48 w-48 rounded-full object-cover object-top'/>
          <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
            Ryan Nishimoto
          </h3>
          <p className='text-gray-500 dark:text-gray-300 text-center'>
          Full-Stack Developer
          </p>

          <div className='flex space-x-5 pt-6'>
            <a href="https://github.com/Rjaysesh0207" target='_blank'>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className='w-8 h-8 text-teal-500 hover:text-teal-600'
                >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ryannishimoto1/" target='_blank'>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className='w-8 h-8 text-teal-500 hover:text-teal-600'
                
                >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
              </svg>
            </a>
            <a href="mailto: rnishimoto96@gamil.com" target='_blank'>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className='w-8 h-8 text-teal-500 hover:text-teal-600'
                
              >
                <path d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className='prose max-w-none prose-lg pt-8 pb-8 dark:prose-invert xl:col-span-2'>
          <p><strong>About Me:</strong> I&apos;m Ryan Nishimoto, a full-stack developer with a unique journey into the world of web development. From my early days as an automotive technician, I transitioned into the dynamic field of coding and graduated from General Assembly.</p>
          <p><strong>My Journey:</strong> My path into web development may not be traditional, but it&apos;s been driven by an insatiable curiosity for technology. I was astounded by the rapidly evolving tech landscape in the automotive industry, which inspired me to dive headfirst into coding. My decision to pursue a coding career was motivated by a desire to embrace innovation, solve complex problems, and create digital solutions.</p>
        </div>
      </div>
    </div>
  )
}
