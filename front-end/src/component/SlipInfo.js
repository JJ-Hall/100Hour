function SlipInfo(props){
    return (
        <div class="tr">
            <div class="td">{props.slip}</div>
            <div class="td"><a href={"users/"+props.id}>{props.name}</a></div>
            <div class="td">{props.length}ft</div>
            <div class="td">{props.cost}</div>
            <div class="td">{props.lift}</div>
            <div class="td">{props.available}</div>
        </div>
    )
}

export default SlipInfo