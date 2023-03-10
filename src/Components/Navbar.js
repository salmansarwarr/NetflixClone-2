import React, {useState, useEffect} from 'react'
import '../Style/Navbar.scss'

function Navbar() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true)
            }else {
                setShow(false)
            }

            return () => {
                window.removeEventListener("scroll")
            } 
        })
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className='nav_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png'
                alt='NETFLIX'
            />

            <img
                className='nav_avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt='NETFLIX'
            />
        </div>
    )
}

export default Navbar