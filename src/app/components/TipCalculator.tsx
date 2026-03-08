import { useState } from "react";
import svgPaths from "../../imports/svg-ezxkj4pw27";
import logoImage from "figma:asset/9684304360dff71f54f96fb3a3b4f784230e63e7.png";

function Group() {
  return (
    <div className="absolute inset-[12.86%_6.11%_4.14%_6.11%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 581">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p21263100} fill="var(--fill-0, #E2E2E2)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1b5ae7f0} fill="var(--fill-0, #E2E2E2)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p1aaed080} fill="var(--fill-0, #E2E2E2)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p200ea980} fill="var(--fill-0, #E2E2E2)" fillRule="evenodd" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-[53px] left-[133px] top-[29px] w-[128px]" data-name="logo 1">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={logoImage} />
    </div>
  );
}

export default function TipCalculator() {
  const [billTotal, setBillTotal] = useState<string>("0");
  const [tipPercent, setTipPercent] = useState<number | null>(null);
  const [customTipDollar, setCustomTipDollar] = useState<string>("");
  const [customTipPercent, setCustomTipPercent] = useState<string>("");
  const [numPeople, setNumPeople] = useState<number>(1);

  // Calculate values
  const billAmount = parseFloat(billTotal) || 0;
  
  // Determine tip amount
  let tipAmount = 0;
  if (customTipDollar) {
    tipAmount = parseFloat(customTipDollar) || 0;
  } else if (customTipPercent) {
    tipAmount = (billAmount * (parseFloat(customTipPercent) || 0)) / 100;
  } else if (tipPercent !== null) {
    tipAmount = (billAmount * tipPercent) / 100;
  }

  const totalBill = billAmount + tipAmount;
  const perPersonTotal = totalBill / numPeople;
  const perPersonBill = billAmount / numPeople;
  const perPersonTip = tipAmount / numPeople;

  const handleTipPercentClick = (percent: number) => {
    // If clicking the already selected button, deselect it
    if (tipPercent === percent && !customTipDollar && !customTipPercent) {
      setTipPercent(null);
    } else {
      setTipPercent(percent);
      setCustomTipDollar("");
      setCustomTipPercent("");
    }
  };

  const handleCustomDollarChange = (value: string) => {
    setCustomTipDollar(value);
    setCustomTipPercent("");
  };

  const handleCustomPercentChange = (value: string) => {
    setCustomTipPercent(value);
    setCustomTipDollar("");
  };

  return (
    <div className="bg-white overflow-clip relative rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[393px] h-[700px]" data-name="tip-calculator">
      <Group />
      <Logo />

      {/* Bill total input */}
      <p className="absolute font-['Outfit',sans-serif] font-medium leading-[normal] left-[74px] not-italic text-[#272626] text-[16px] top-[165px] whitespace-nowrap">Bill total</p>
      <div className="absolute bg-[#eee] h-[37px] left-[197px] rounded-[5px] top-[157px] w-[131px]" />
      <p className="absolute font-['JetBrains_Mono',sans-serif] font-normal h-[25px] leading-[26px] left-[207px] text-[#272626] text-[20px] top-[163px] w-[13px] pointer-events-none z-10">$</p>
      <input
        type="number"
        inputMode="decimal"
        value={billTotal}
        onChange={(e) => setBillTotal(e.target.value)}
        placeholder=""
        className="-translate-x-full absolute bg-transparent h-[37px] left-[316px] rounded-[5px] top-[157px] w-[107px] font-['JetBrains_Mono',sans-serif] font-normal text-[20px] leading-[26px] text-[#272626] border-none outline-none text-right px-0"
      />

      {/* Tip percentage buttons */}
      <div className="absolute left-[74px] top-[218px] flex gap-[8px]">
        <button
          onClick={() => handleTipPercentClick(15)}
          className={`h-[37px] rounded-[15px] w-[57px] transition-all ${
            tipPercent === 15 && !customTipDollar && !customTipPercent
              ? 'bg-[#a5e8c8] border-2 border-[#00aa58]'
              : 'bg-[#00aa58]'
          } hover:bg-[#a5e8c8] hover:border-2 hover:border-[#00aa58]`}
        >
          <p className={`font-['JetBrains_Mono:${tipPercent === 15 && !customTipDollar && !customTipPercent ? 'Medium' : 'Regular'}',sans-serif] font-${tipPercent === 15 && !customTipDollar && !customTipPercent ? 'medium' : 'normal'} leading-[26px] text-[20px] ${tipPercent === 15 && !customTipDollar && !customTipPercent ? 'text-[#272626]' : 'text-white'} hover:text-[#272626] m-0 transition-colors`}>15%</p>
        </button>
        <button
          onClick={() => handleTipPercentClick(18)}
          className={`h-[37px] rounded-[15px] w-[57px] transition-all ${
            tipPercent === 18 && !customTipDollar && !customTipPercent
              ? 'bg-[#a5e8c8] border-2 border-[#00aa58]'
              : 'bg-[#00aa58]'
          } hover:bg-[#a5e8c8] hover:border-2 hover:border-[#00aa58]`}
        >
          <p className={`font-['JetBrains_Mono:${tipPercent === 18 && !customTipDollar && !customTipPercent ? 'Medium' : 'Regular'}',sans-serif] font-${tipPercent === 18 && !customTipDollar && !customTipPercent ? 'medium' : 'normal'} leading-[26px] text-[20px] ${tipPercent === 18 && !customTipDollar && !customTipPercent ? 'text-[#272626]' : 'text-white'} hover:text-[#272626] m-0 transition-colors`}>18%</p>
        </button>
        <button
          onClick={() => handleTipPercentClick(20)}
          className={`h-[37px] rounded-[15px] w-[57px] transition-all ${
            tipPercent === 20 && !customTipDollar && !customTipPercent
              ? 'bg-[#a5e8c8] border-2 border-[#00aa58]'
              : 'bg-[#00aa58]'
          } hover:bg-[#a5e8c8] hover:border-2 hover:border-[#00aa58]`}
        >
          <p className={`font-['JetBrains_Mono:${tipPercent === 20 && !customTipDollar && !customTipPercent ? 'Medium' : 'Regular'}',sans-serif] font-${tipPercent === 20 && !customTipDollar && !customTipPercent ? 'medium' : 'normal'} leading-[26px] text-[20px] ${tipPercent === 20 && !customTipDollar && !customTipPercent ? 'text-[#272626]' : 'text-white'} hover:text-[#272626] m-0 transition-colors`}>20%</p>
        </button>
        <button
          onClick={() => handleTipPercentClick(25)}
          className={`h-[37px] rounded-[15px] w-[57px] transition-all ${
            tipPercent === 25 && !customTipDollar && !customTipPercent
              ? 'bg-[#a5e8c8] border-2 border-[#00aa58]'
              : 'bg-[#00aa58]'
          } hover:bg-[#a5e8c8] hover:border-2 hover:border-[#00aa58]`}
        >
          <p className={`font-['JetBrains_Mono:${tipPercent === 25 && !customTipDollar && !customTipPercent ? 'Medium' : 'Regular'}',sans-serif] font-${tipPercent === 25 && !customTipDollar && !customTipPercent ? 'medium' : 'normal'} leading-[26px] text-[20px] ${tipPercent === 25 && !customTipDollar && !customTipPercent ? 'text-[#272626]' : 'text-white'} hover:text-[#272626] m-0 transition-colors`}>25%</p>
        </button>
      </div>

      {/* Custom tip inputs */}
      <p className="absolute font-['Outfit',sans-serif] font-medium h-[38px] leading-[12px] left-[74px] not-italic text-[#272626] text-[14px] top-[273px] w-[53px]">or enter custom amount</p>
      
      <div className="absolute bg-[#eee] h-[37px] left-[158px] rounded-[5px] top-[273px] w-[76px]" />
      <p className="absolute font-['JetBrains_Mono',sans-serif] font-normal h-[25px] leading-[26px] left-[167px] text-[#272626] text-[20px] top-[278px] w-[13px] pointer-events-none z-10">$</p>
      <input
        type="number"
        inputMode="decimal"
        value={customTipDollar}
        onChange={(e) => handleCustomDollarChange(e.target.value)}
        placeholder=""
        className="absolute bg-transparent h-[37px] left-[180px] rounded-[5px] top-[273px] w-[54px] font-['JetBrains_Mono',sans-serif] font-normal text-[20px] text-[#272626] border-none outline-none px-0"
      />

      <p className="-translate-x-1/2 absolute font-['Outfit',sans-serif] font-medium h-[20px] leading-[normal] left-[247.5px] not-italic text-[#272626] text-[14px] text-center top-[281px] w-[17px] pointer-events-none">or</p>

      <div className="absolute bg-[#eee] h-[37px] left-[263px] rounded-[5px] top-[273px] w-[65px]" />
      <input
        type="number"
        inputMode="decimal"
        value={customTipPercent}
        onChange={(e) => handleCustomPercentChange(e.target.value)}
        placeholder=""
        className="absolute bg-transparent h-[37px] left-[273px] rounded-[5px] top-[273px] w-[35px] font-['JetBrains_Mono',sans-serif] font-normal text-[20px] text-[#272626] border-none outline-none px-0"
      />
      <p className="absolute font-['JetBrains_Mono',sans-serif] font-normal h-[25px] leading-[26px] left-[308px] text-[#272626] text-[20px] top-[279px] w-[13px] pointer-events-none">%</p>

      {/* Number of people */}
      <p className="absolute font-['Outfit',sans-serif] font-medium h-[34px] leading-[16px] left-[71px] not-italic text-[#272626] text-[16px] top-[342px] w-[91px]">How many are paying?</p>
      
      <button
        onClick={() => setNumPeople(Math.max(1, numPeople - 1))}
        className="absolute left-[248px] size-[18px] top-[350px] flex items-center justify-center"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="minus">
            <circle cx="9" cy="9" fill="#00AA58" r="9" />
            <line stroke="white" strokeWidth="2" x1="3" x2="15" y1="9" y2="9" />
          </g>
        </svg>
      </button>

      <p className="-translate-x-1/2 absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium h-[29px] leading-[26px] left-[287px] text-[#272626] text-[35px] text-center top-[345px] w-auto">{numPeople}</p>

      <button
        onClick={() => setNumPeople(Math.min(8, numPeople + 1))}
        className="absolute left-[308px] size-[18px] top-[350px] flex items-center justify-center"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="plus">
            <circle cx="9" cy="9" fill="#00AA58" r="9" />
            <line stroke="white" strokeWidth="2" x1="3" x2="15" y1="9" y2="9" />
            <line stroke="white" strokeWidth="2" x1="9" x2="9" y1="3" y2="15" />
          </g>
        </svg>
      </button>

      {/* Divider line */}
      <div className="absolute h-0 left-[71px] top-[406px] w-[257px]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257 3">
            <line stroke="#EEEEEE" strokeWidth="3" x2="257" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>

      {/* Results section */}
      {billAmount > 0 && (
        <>
          <p className="absolute font-['Outfit',sans-serif] font-medium leading-[normal] left-[84px] not-italic text-[#272626] text-[20px] top-[430px] whitespace-nowrap">You owe</p>
          <p className="absolute font-['JetBrains_Mono',sans-serif] font-medium leading-[normal] left-[234px] text-[#272626] text-[20px] top-[431px] whitespace-nowrap">${perPersonTotal.toFixed(2)}</p>

          <p className="-translate-x-full absolute font-['Outfit',sans-serif] font-medium leading-[normal] left-[162px] not-italic text-[#272626] text-[16px] text-right top-[473px] whitespace-nowrap">Bill</p>
          <p className="absolute font-['JetBrains_Mono',sans-serif] font-medium leading-[normal] left-[234px] text-[#272626] text-[16px] top-[473px] whitespace-nowrap">${perPersonBill.toFixed(2)}</p>

          <p className="-translate-x-full absolute font-['Outfit',sans-serif] font-medium leading-[normal] left-[162px] not-italic text-[#272626] text-[16px] text-right top-[497px] whitespace-nowrap">Tip</p>
          <p className="absolute font-['JetBrains_Mono',sans-serif] font-medium leading-[normal] left-[234px] text-[#272626] text-[16px] top-[497px] whitespace-nowrap">${perPersonTip.toFixed(2)}</p>

          {numPeople > 1 && (
            <div className="-translate-x-1/2 absolute font-['Outfit',sans-serif] font-medium h-[50px] leading-[16px] left-[196px] not-italic text-[#272626] text-[14px] text-center top-[550px] w-[264px]">
              <p className="mb-0">Total bill is ${totalBill.toFixed(2)} split among {numPeople} parties.</p>
              <p className="mb-0">&nbsp;</p>
              <p>Thank you for tipping!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}