import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog.jsx";

const NewTransactionModal = ({payer, payer_id}) => {
    return (<>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>New Transaction</DialogTitle>
                <DialogDescription>
                    {payer}
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </>);
};

export default NewTransactionModal;
