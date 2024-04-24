import formatDate from "@/lib/utils/format.js";
import {Button} from "@/components/ui/button.jsx";
import {ArrowUpDown} from "lucide-react"


const GameColumns = [
    {
        accessorKey: "name",
        header: ({column}) => {
            return (
                <Button variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Game
                    <ArrowUpDown className="ml-4 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="text-center font-medium">
            {row.getValue("name")}
        </div>
    },
    {
        accessorKey: "lastModifiedDate",
        header: ({column}) => {
            return (
                <Button variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Last Played On
                    <ArrowUpDown className="ml-4 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="text-center font-medium">
            {formatDate(row.getValue("lastModifiedDate"))}
        </div>
    }
]

export default GameColumns;
