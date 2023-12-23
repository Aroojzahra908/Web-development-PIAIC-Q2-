export type ButtonProps = {
    title: string
    data?:string,
    onClickHandler: ()=> void
    className?: string
}

export type CardPropsType = {
    courseTitle: string,
    tag:string,
    description: string,
    showTag?: boolean,
    isDescription?: boolean,
    style:{}
}


export type TagPropsType = {
    tagText: string
}