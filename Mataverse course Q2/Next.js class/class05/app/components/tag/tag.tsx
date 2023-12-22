import { TagPropsType } from "@/types/componentTypes";

export default function Tag(props:TagPropsType) {
    return (
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">
        {props.tagText}
        </span>
    )
}