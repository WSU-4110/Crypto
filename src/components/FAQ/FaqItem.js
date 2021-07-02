import React,{useState} from 'react'

export default function FaqItem({title,children}) {
    // intialize state to see if accordion is open or closed.
    const [isOpen, setOpen]=useState(false);
    return (
        <div className="accordion-wrapper">
        {/* add open class if isOpen is true else add nothing */}
        <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
        >
        {title}
      </div>
      {/* add collapsed class if isOpen is true else add nothing */}
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
    )
}
