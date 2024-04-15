import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Dialog, DialogTrigger} from "@/components/ui/dialog.jsx";
import {NewTransactionModal} from "@/components/index.js";

const PlayerCard = ({player}) => {
    console.log(player)
    return (
        <Dialog>
            <DialogTrigger asChild>
            <Card className="grow shadow-xl border rounded-xl">
                <CardHeader className="p-2">
                    <CardTitle className="text-xl">{player.player_name}</CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                    <p>{player.balance}</p>
                </CardContent>
            </Card>
            </DialogTrigger>
            <NewTransactionModal payer={player.player_name} payer_id={player.player_id} />
        </Dialog>
    );
};

export default PlayerCard;
