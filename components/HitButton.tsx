"use client"
export const HitButton = ({hit}) => {

    let handleHit = ()=>{
        {hit()}
    }

    return(
        <div className={`flex justify-center pt-4 pb-2`}>
            <button
                onClick={handleHit}
                className="rounded bg-stone-700 border-2 border-stone-700 w-36">
                Hit
            </button>
        </div>
        )
}