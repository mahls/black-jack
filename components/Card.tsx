import { CardBody, CardContainer, CardItem } from "./3d-card";
export const Card = ({cardvalue, symbol, player, totalvalue}) => {
    return (

        <CardContainer className="">
        <CardBody className="">


        <div className="pb-4 mb-2">
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

        </CardBody>
        </CardContainer>
        );
};
