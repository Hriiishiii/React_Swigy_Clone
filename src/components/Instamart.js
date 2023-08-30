import { useState } from "react"

const Section = ({title, description, isvisible, setIsVisible}) => {
    // const [isvisible, setIsVisible] = useState(false);
    return (
        <div>
            <div className="border bottom-1 my-5 p-6">
                <h1 className="text-3xl font-bold">{title}</h1>
                {
                    isvisible ? <button className="cursor-pointer underline" onClick={() =>{
                        setIsVisible(false)
                    }}>Hide</button> : <button className="cursor-pointer underline" onClick={() =>{
                        setIsVisible(true)
                    }}>Show</button>
                }
                {isvisible ? <div>{description}</div> : ''}
            </div>
        </div>
    )
}

const Instamart = () => {
    const [visibleSection, setIsVisibleSection] = useState(0)
    return (
        <div>
            <h1></h1>
            <Section
                title={'About - Instamart'}
                description={'This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram'}
                isvisible = {visibleSection === 0}
                setIsVisible = {() => setIsVisibleSection (0)}
                />
            <Section
                title={'Product - Instamart'}
                description={'This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram'}
                isvisible = {visibleSection === 1}
                setIsVisible = {() => setIsVisibleSection (1)}
                />
            <Section
                title={'Details - Instamart'}
                description={'This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram This is from the about of instagram'}
                isvisible = {visibleSection === 2}
                setIsVisible = {() => setIsVisibleSection (2)}
                />
        </div>
    )
}

export default Instamart;