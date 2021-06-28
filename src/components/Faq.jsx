import React from 'react'
import './faq.css';

function Faq ({faq, index, toggleFaq}) {
	return (
     
       
       
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFaq(index)}
		>
			<div className="faq-question">
				{faq.question}
			</div>
			<div className="faq-answer">
				{faq.answer}
			</div>
		</div>
    
	)
}

export default Faq;




