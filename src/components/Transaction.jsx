import {CirclePlus} from "lucide-react";

const Transaction = ({transaction}) => {
    return (<div className="flex justify-center gap-10">
        <CirclePlus className="fill-green-700 text-white" />
        <div className="flex justify-center gap-2 text-xl">
            <span>{transaction.payer_name}</span>
            <span>Paid</span>
            <span>{transaction.payee_name}</span>
            <span>{transaction.amount}</span>
        </div>
    </div>);
};

export default Transaction;
