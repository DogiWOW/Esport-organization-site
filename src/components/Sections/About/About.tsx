import React from 'react'

const About = () => {
  return (
    <div className='section'>
        <div className='w-4/5 text-white flex flex-col gap-5'>
            <h1 className='text-center font-rightous text-blue-200 text-4xl md:text-6xl'>LucidDreamers</h1>
            <span className='sm:text-base md:text-2xl flex flex-col gap-5 overflow-auto'>
              <p>We are a newly established organization that was created for the needs of players.</p>
              <p>We want to look for and develop young talents on the Polish eSports scene.</p>
              <p>We will try step by step to improve skills of our players.</p>
              <p>It is a long-term project and we do not intend to stop at the smallest successes, but try to keep moving forward no matter the cost.</p> 
              <p>eSport is not only a passion but also a job for a large number of people.</p> 
              <p>We believe that together we will build one of the leading Multigaming in Poland, later in Europe and maybe one day, in the world.</p>
            </span>
        </div>
    </div>
  )
}

export default About