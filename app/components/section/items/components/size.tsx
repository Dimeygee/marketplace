



export const Size = ({ active, name }: { active: boolean, name: string }) => {

    const style = {
        backgroundColor: active ? "#FBEBB5" : "#FBEBB5"
    }

    return (
        <div style={style} className="size">
            {name}
        </div>
    )
}