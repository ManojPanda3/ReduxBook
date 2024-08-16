import { } from 'react'
import './index.css'
import { ArrowDown } from 'iconsax-react';


const HeroSectionBookImageSize = { height: 1300, width: 1300 };
const HeroSectionBookImage = `https://lh3.googleusercontent.com/fife/ALs6j_F2ACWkyYRdsqO8uboWmjxZEwH45n_9ChluVPWqEtiL6iqlnrxUIS4AgbY46bn0w9Mt5aiurY0RHYVsJCEv6roGRrqRD11T9YI_T_eLesUpu8O9KBs_fh5s3js2b3m_i8cJFECE4HSwbq75BVux_t32WWifJMGZlbkiKTlgAbkl8TxPzjXAtn6xcZoR3LbIPbTRfjt8uAujWHEf9W5Wq3oSDwoqjnVATTIfL1m4rhiSs-oPD6Vu3RMr7ZhOXOCPBCbglSny5uFilgvSVvotfnQmp1-4WHV5jYlE3Dy5iL3qxt0hmac8-J9YMZgYjgITueREVZHRJNRRNbDCUCFwnOPx_gz0jr_BoUSb-MfjFnvBLBiHI8ePV7YHXQC5RrrX6ZxnHLvrFvZv9UETwhE9x68bQ55mvijz5_nqPGO3JFMzP51A9S0OUYL6IiZjlbd6lfBvpEMR383OFPRcEc3MPZEkHpWn4jQEHeo4CnleRv-M4lzh1XASIotacvIzuiafkqycEl3XSlJmscOD9Y-sRFD-qEWUk-vlL0nnw26Af0jLyfaFA6ZElGgKtLq5b0-bdPe9jFUikXS0LGlUULRoU5WIEj_g4TTV0iUucQwoeQx7VKNUOIXDvgyHKD6AnwFdFTeowu5Ith5YKQyMPTUj9BZ9MTemHis240zMKi_xpb5JyGy2tZjuoReEsYatYlAOE0V9YNhMcNzyChcby4wfA0mFhngx7bEXzMCUPBKRtpnlY3k2CfnwvrFWpc5SGtmZ3d0n-L_EHgmSmhpSNh4IP7OclKi5UUUK1PhxV-CovXsBWnGKv84CCH00MawirHUka9CHjrwrFAODFv0vGnsq4n0tGQ0ogmz47m_TZdB_nxngGpp_KiKsxNUmfBQzIGdsazSlqXdnxVtftIORbeA9aNv6Aa4NtLQPEsPSs7ufwvttqZpAQY1de0FxuJGecc55Ezr12Y2Hz11kDhc_ZC3hDr-V-2fTFlwYGgx8zgeL61ZYJt_x4CgwTR_SfOn1F-uvbczuUxVFqlJBci_3KyPEtoCwpniGsBUmgAt4D5xt_vWGmmqcaW2I4X3ZMo44-3eeFrL4TAl5PMtvUB1RhDthX1GFbkbcWu0CxYz8SeHFp87q7RHKJW9bmzhCJcUWrvE2SDeTI3e2TqfBAveAjUq4jPh3c1lbMPbrdPd7efK7Kpt38kpupnIloJZg_HnAO5nL97mAW2GobjfsrMhk-p6a0puyEOMw0-pDWknb4S1DatMpCPFNyT9FEOAO9QQGIUSN2mmStDc5M3kFjYxFtBsNreuny8d2UjdQFnzH2-_NJVHMA1ofOSvQZMggJNDkKI6D4parDaLfO0LHCs74fp7bx4UyS07chfSeM8RlqmadNwJiQFXZVJLROqi92k1xF6wnCKz5UHY6M-fgRw-JiAGAmtJ3gfdR92gn6CT5wslZJbpvTERETRCyxNVefDBw39jAyP36suu8k1couT6s4iKdfALe_E7nPtPK_HZ4FVyAv8AnSYt4t1FdsNXcxIQulp45daBdcrZJLM4F76ruI2z8dANnwvY_gMeeBi5KgzwmzU6Fi0cpb2bqk-izKNZvsp4HTxgwfVzfptIBq3ojI7BvKFoEicz-sXHk1Bi7QnCIGf6V7NZ1uBRxLQ=w${HeroSectionBookImageSize.width}-h${HeroSectionBookImageSize.height}-iv2`;
const HeroSection = () => {
  return <section className="hero-section">
    <div className="hero-section-img display-desktop-only">
      <img src={HeroSectionBookImage} alt="" className="hero-img" />
    </div>
    <div className="hero-section-right">
      <div>
        <h1>Seamless Reading</h1>
        <h5>Effortless Selling</h5>
      </div>
      <div>
        <p className="hero-section-para">A book a day keeps boredom at bay</p>
        <div className="hero-section-cta">
          <button className="btn">GetStarted</button>
          <a href="/learnmore">Learn More</a>
        </div>
      </div>
    </div>
    <ArrowDown
      size="24"
      style={{ position: "absolute", bottom: "5rem", left: "50%" }}
      color="#000"
    />
  </section>
}
export default HeroSection;
