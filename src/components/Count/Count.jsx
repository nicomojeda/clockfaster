import { useCount } from "../../hooks/useCount";

export const Count = ({initial = 0, max}) => {
    const {count, increment, decrement, reset} = useCount(0);

    return(
        <>
        <div className="cointeiner flex-d">
            <h1>{count}</h1>
        </div>
        </>
    )





}