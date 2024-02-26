"use client"
export const StandButton = ({stand}) => {

    let handleStand = ()=>{
        {stand()}
    }

    return(
        <div className={`flex justify-center pb-2`}>
            <button
                onClick={handleStand}
                className="rounded bg-stone-700 border-2 border-stone-700 w-36">
                Stand
            </button>
        </div>
        )
}