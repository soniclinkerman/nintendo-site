import React from "react";
import "./Sources.css"

import Collapsible from 'react-collapsible';

const Sources = () => {
    return(
        <div>
        
            <Collapsible trigger="About Nintendo" className="source-title">
                <a className="source-link"><li>Company Info</li></a>
                <a className="source-link"><li>Careers</li></a>
                <a className="source-link"><li>Csr Report</li></a>
                <a className="source-link"><li>Sitemap</li></a>
            </Collapsible>

            <Collapsible trigger="Where to buy" className="source-title">
                <a className="source-link"><li>Game Store</li></a>
                <a className="source-link"><li>Online Retail</li></a>
                <a className="source-link"><li>Nintendo NY</li></a>
                <a className="source-link"><li>Nintendo Store</li></a>
            </Collapsible>

            <Collapsible trigger="Support" className="source-title">
                <a className="source-link"><li>Health & Safety Precautions</li></a>
                <a className="source-link"><li>Updated Warranty</li></a>
                <a className="source-link"><li>Nintendo Switch Report</li></a>
                <a className="source-link"><li>Wii U Support</li></a>
                <a className="source-link"><li>Nintendo 3DS Support</li></a>
                <a className="source-link"><li>Repair Help</li></a>
                <a className="source-link"><li>Nintendo Product Recycling</li></a>
            </Collapsible>

            <Collapsible trigger="Parents" className="source-title">
                <a className="source-link"><li>Info for Parents</li></a>
                <a className="source-link"><li>Parental Controls</li></a>
            </Collapsible>

            <Collapsible trigger="Legal" className="source-title">
                <a className="source-link"><li>Documents and Policies</li></a>
                <a className="source-link"><li>Terms of Use</li></a>
            </Collapsible>

            <Collapsible trigger="Privacy" className="source-title">
                <a className="source-link"><li>Privacy Policy</li></a>
                <a className="source-link"><li>Internet-Based Ads</li></a>
            </Collapsible>

            <Collapsible trigger="🇺🇸 Change Region" className="source-title">
             
            </Collapsible>
        </div>
      
    )
}

export default Sources