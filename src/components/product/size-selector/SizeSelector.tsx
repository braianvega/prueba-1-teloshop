import type { Size } from "@/interfaces"
import clsx from "clsx";

interface Props {
    selectedSise: Size;
    availableSize: Size[];
}

export const SizeSelector = ({ availableSize, selectedSise }: Props) => {
    return (
        <div className="my-2">
            <h3 className="font-bold mb-4"> Tallas disponibles</h3>
            <div className="flex">
                {
                    availableSize.map(size =>
                        <button
                            key={size}
                            className={
                                clsx('mx-2 hover:underline text-lg',
                                    { 'underline': size === selectedSise }
                                )
                            }>
                            {size}
                        </button>
                    )
                }
            </div>

        </div>
    )
}
