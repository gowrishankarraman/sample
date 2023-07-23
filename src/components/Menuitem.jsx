export default function Menuitem(props){
    return(
        <div className="box-inst">
            <h1>{props.title}</h1>
             <img src={props.imageUrl} alt="img" className={`${props.size==="small" ? "menu-item":null} hover`}></img>

        </div>
    )
}