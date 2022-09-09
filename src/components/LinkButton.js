function LinkButton(props) {
    return (
        <a 
            href={props.destination} 
            className={props.classes + " bg-slate-800 px-10 py-4 text-slate-200 font-bold rounded-lg"}
        >
            {props.linkText}
        </a>
    )
}

export default LinkButton;