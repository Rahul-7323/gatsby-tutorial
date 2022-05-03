import * as React from 'react'

const Greetings = ({message}) => {
    return (
        <div className="p-5 text-lg rounded-2xl bg-red-300 border-4 hover:bg-red-400 border-black font-bold">
            {message}
        </div>
    )
}

export default Greetings;