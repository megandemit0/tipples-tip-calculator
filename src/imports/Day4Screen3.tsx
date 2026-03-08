import svgPaths from "./svg-85ww5hcn46";

function Group() {
  return (
    <div className="absolute inset-[13.5%_6.11%_7.13%_6.11%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 676.229">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c07480} fill="var(--fill-0, #E2E2E2)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p252ec180} fill="var(--fill-0, #E2E2E2)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d="M0 671H10V7.00005H0V671Z" fill="var(--fill-0, #E2E2E2)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d="M335 671H345V7H335V671Z" fill="var(--fill-0, #E2E2E2)" fillRule="evenodd" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Plus() {
  return (
    <div className="absolute left-[308px] size-[18px] top-[410px]" data-name="plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="plus">
          <circle cx="9" cy="9" fill="var(--fill-0, #00AA58)" id="Ellipse 10" r="9" />
          <line id="Line 39" stroke="var(--stroke-0, white)" strokeWidth="2" x1="3" x2="15" y1="9" y2="9" />
          <line id="Line 40" stroke="var(--stroke-0, white)" strokeWidth="2" x1="9" x2="9" y1="3" y2="15" />
        </g>
      </svg>
    </div>
  );
}

function Minus() {
  return (
    <div className="absolute left-[248px] size-[18px] top-[410px]" data-name="minus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="minus">
          <circle cx="9" cy="9" fill="var(--fill-0, #00AA58)" id="Ellipse 11" r="9" />
          <line id="Line 41" stroke="var(--stroke-0, white)" strokeWidth="2" x1="3" x2="15" y1="9" y2="9" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[7.16%_58.94%_87.23%_33.84%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.3709 47.8">
        <g id="Group">
          <path d={svgPaths.p2860bb00} fill="var(--fill-0, #00AA58)" id="Vector" />
          <path d={svgPaths.p38784100} fill="var(--fill-0, #00AA58)" id="Vector_2" />
          <path d={svgPaths.p2b2a7c00} fill="var(--fill-0, #00AA58)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-[133px] top-[61px]" data-name="logo">
      <p className="absolute font-['Futura:Bold',sans-serif] leading-[26px] left-[166px] not-italic text-[#00aa58] text-[26px] top-[64px] whitespace-nowrap">tipples</p>
      <p className="absolute font-['Futura:Medium',sans-serif] leading-[11px] left-[176px] not-italic text-[#00aa58] text-[14px] top-[92px] whitespace-nowrap">tip calculator</p>
      <Group1 />
    </div>
  );
}

export default function Day4Screen() {
  return (
    <div className="relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="day 4/screen 3">
      <div className="absolute bg-white h-[852px] left-0 rounded-[30px] top-0 w-[393px]" />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Bold',sans-serif] h-[29px] leading-[26px] left-[287px] not-italic text-[#272626] text-[35px] text-center top-[405px] w-[24px]">2</p>
      <p className="absolute font-['IBM_Plex_Mono:SemiBold',sans-serif] h-[22px] leading-[20px] left-[224px] not-italic text-[#272626] text-[20px] top-[506px] w-[73px]">$51.47</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] h-[25px] leading-[26px] left-[71px] not-italic text-[#272626] text-[20px] top-[185px] w-[122px]">Bill total</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] h-[45px] leading-[22px] left-[71px] not-italic text-[#272626] text-[20px] top-[397px] w-[133px]">How many are paying?</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] h-[22px] leading-[22px] left-[71px] not-italic text-[#272626] text-[20px] top-[506px] w-[85px]">You owe</p>
      <div className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Regular',sans-serif] h-[66px] leading-[0] left-[196px] not-italic text-[#272626] text-[14px] text-center top-[629px] w-[264px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[16px]">{`Total bill is `}</span>
          <span className="font-['IBM_Plex_Mono:SemiBold',sans-serif] leading-[16px] not-italic">$102.94</span>
          <span className="leading-[16px]">{` split among `}</span>
          <span className="font-['IBM_Plex_Mono:SemiBold',sans-serif] leading-[16px] not-italic">2 parties</span>
          <span className="leading-[16px]">.</span>
        </p>
        <p className="leading-[16px] mb-0">&nbsp;</p>
        <p className="leading-[16px]">Thank you for tipping!</p>
      </div>
      <p className="-translate-x-full absolute font-['IBM_Plex_Mono:Regular',sans-serif] h-[14px] leading-[14px] left-[156px] not-italic text-[#272626] text-[16px] text-right top-[552px] w-[40px]">Bill</p>
      <p className="absolute font-['IBM_Plex_Mono:SemiBold',sans-serif] h-[14px] leading-[14px] left-[224px] not-italic text-[#272626] text-[16px] top-[552px] w-[64px]">$44.76</p>
      <p className="absolute font-['IBM_Plex_Mono:SemiBold',sans-serif] h-[14px] leading-[14px] left-[224px] not-italic text-[#272626] text-[16px] top-[575px] w-[51px]">$6.71</p>
      <p className="-translate-x-full absolute font-['IBM_Plex_Mono:Regular',sans-serif] h-[16px] leading-[14px] left-[156px] not-italic text-[#272626] text-[16px] text-right top-[574px] w-[32px]">Tip</p>
      <Group />
      <div className="absolute bg-[#eee] h-[37px] left-[214px] rounded-[5px] top-[179px] w-[114px]" />
      <div className="absolute bg-[#00aa58] h-[37px] left-[74px] rounded-[15px] top-[253px] w-[57px]" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] h-[25px] leading-[26px] left-[224px] not-italic text-[#272626] text-[20px] top-[185px] w-[73px]">$89.52</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] h-[41px] leading-[14px] left-[74px] not-italic text-[#272626] text-[14px] top-[307px] w-[68px]">Or enter custom amount</p>
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Regular',sans-serif] h-[14px] leading-[12px] left-[247.5px] not-italic text-[#272626] text-[12px] text-center top-[319px] w-[17px]">or</p>
      <div className="absolute bg-[#eee] h-[37px] left-[158px] rounded-[5px] top-[308px] w-[76px]" />
      <div className="absolute bg-[#eee] h-[37px] left-[263px] rounded-[5px] top-[308px] w-[65px]" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] h-[25px] leading-[26px] left-[167px] not-italic text-[#272626] text-[20px] top-[313px] w-[13px]">$</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] h-[25px] leading-[26px] left-[308px] not-italic text-[#272626] text-[20px] top-[314px] w-[13px]">%</p>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] h-[25px] leading-[26px] left-[84px] not-italic text-[20px] text-white top-[258px] w-[37px]">10%</p>
      <div className="absolute bg-[#00aa58] h-[37px] left-[139px] rounded-[15px] top-[253px] w-[57px]" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] h-[25px] leading-[26px] left-[149px] not-italic text-[20px] text-white top-[258px] w-[37px]">15%</p>
      <div className="absolute bg-[#a5e8c8] border-2 border-[#00aa58] border-solid h-[37px] left-[204px] rounded-[15px] top-[253px] w-[57px]" />
      <p className="absolute font-['IBM_Plex_Mono:SemiBold',sans-serif] h-[25px] leading-[26px] left-[214px] not-italic text-[#272626] text-[20px] top-[258px] w-[37px]">18%</p>
      <div className="absolute bg-[#00aa58] h-[37px] left-[269px] rounded-[15px] top-[253px] w-[57px]" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] h-[25px] leading-[26px] left-[279px] not-italic text-[20px] text-white top-[258px] w-[37px]">20%</p>
      <Plus />
      <Minus />
      <div className="absolute h-0 left-[71px] top-[467px] w-[257px]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257 3">
            <line id="Line 43" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="3" x2="257" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <Logo />
    </div>
  );
}