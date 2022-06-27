import React, { useState } from 'react';
import quotes from '../quotes.json'
import Card from 'react-bootstrap/Card';

const QuoteBox = () => {

    const [date, setdate] = useState(Math.floor(Math.random() * quotes.length - 1))
    const [color1, setcolor1] = useState(Math.floor(Math.random()*220))
    const [color2, setcolor2] = useState(Math.floor(Math.random()*220))
    const [color3, setcolor3] = useState(Math.floor(Math.random()*220))


    const changequote = () => {
        setcolor1(Math.floor(Math.random()*220))
        setcolor2(Math.floor(Math.random()*220))
        setcolor3(Math.floor(Math.random()*220))
        setdate(Math.floor(Math.random() * quotes.length - 1))
      
    }
    const color = `rgb(${color1},${color2},${color3})`
    document.body.style=`background: rgb(${color1},${color2},${color3})`
    return (
        <div style={{color:color}}>
            <Card className='card'>
                <Card.Header>Quote</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <i className="fa-solid fa-quote-left"></i>
                        <p>
                            {' '}
                            {quotes[date].quote}{' '}
                        </p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title" style={{color:color}}>{quotes[date].author}</cite>
                            <div className='icon-next'style={{background:color}} onClick={changequote}><i className="fa-solid fa-angles-right"></i></div>
                        </footer>
                       
                    </blockquote>
                </Card.Body>
            </Card>
            {/* {quotes[date].quote}
            <div onClick={changequote}>next</div> */}
        </div>
    );
};

export default QuoteBox;