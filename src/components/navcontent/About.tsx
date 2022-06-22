import React from 'react'

const About = () => {
  return (
    <div className='section'>
        <div className='w-4/5 text-white flex flex-col gap-5'>
            <h1 className='text-center font-rightous text-blue-200 text-4xl md:text-6xl'>LucidDreamers</h1>
            <span className='sm:text-base md:text-lg flex flex-col gap-5 overflow-auto'>
              <p>Jesteśmy nowo powstałą organizacją która powstała na potrzeby graczy.</p>
              <p>Chcemy szukać i rozwijać młode talenty na Polskiej scenie eSportu.</p>
              <p>Będziemy starali się krok po kroku dążyć do doskonalenia swoich umiejętności.</p>
              <p>Jest to projekt długofalowy i nie mamy zamiaru poprzestawać na najdrobniejszych sukcesach, lecz starać się ciągle przeć do przodu.</p> 
              <p>eSport jest to nie tylko pasja ale również praca dla sporej ilości ludzi.</p> 
              <p>Wierzymy że wspólnymi siłami zbudujemy jeden z czołowych Multigamingów w Polsce może i kiedyś w Europie i na Świecie.</p>
            </span>
        </div>
    </div>
  )
}

export default About