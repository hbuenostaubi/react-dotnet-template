// can use interface or type or export interface
type Activity = {
    find(arg0: (x: { id: string }) => boolean): React.SetStateAction<Activity | undefined>
    id: string
    title: string
    date: string
    description: string
    category: string
    city: string
    venue: string
}
