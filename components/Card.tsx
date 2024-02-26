export const Card = ({cardvalue, symbol, player, totalvalue}) => {
    return (
        <div className="pb-4">
            <div className="flex justify-center pb-2">
                <div className="font-bold pr-2">{player}</div>
                <div className="font-bold">({totalvalue})</div>
            </div>
            <div className="flex justify-center">
                <div className="flex p-2 border border-white-500 rounded bg-stone-700 h-56 w-36 flex-col justify-between text-red font-bold">
                    <div>{cardvalue}</div>
                    <div>{symbol}</div>
                </div>
            </div>
        </div>
        );
};
