import React,{useState,useEffect} from 'react'
import FaqItem from './FaqItem'
import './Faq.css'
import faqData from './Faq.json'
export default function Faq() {
    
    //state to hold data for faqs
    const [faqInfo,setFaqInfo]=useState({
        faqData:[]
})

useEffect(()=>{
    //set State for faq data as soon as component get loaded  
    setFaqInfo({...faqInfo,faqData:faqData.data})
},[])
    return (
        <div className="wrapper">
            <h1 class="faq-heading">Frequently asked questions</h1>
        {
            // Iterate over faqData from state to show results on DOM for each faq item
            faqInfo.faqData.map(faqItem=>
                <FaqItem key={faqItem.id} title={faqItem.title}>{faqItem.content}</FaqItem>
            )
        }
            
        </div>
    )
}
