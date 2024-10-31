'use client'

import { useState } from "react";
import { IoBagAddOutline, IoBagRemoveOutline } from "react-icons/io5";

interface Props {
    quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {


    const [count, setCount] = useState(1);

    const onQuantityChanged = (value: number) => {
        if (count + value < 1) return;
        setCount(count + value);
    }

    return (
        <div className="flex">
            <button onClick={() => onQuantityChanged(-1)}>
                <IoBagRemoveOutline size={30} />
            </button>
            <span className="w-20 mx-3 px-5 bg-gray-200 text-center rounded">
                {count}
            </span>
            <button onClick={() => onQuantityChanged(1)}>
                <IoBagAddOutline size={30} />
            </button>
        </div>
    )
}
