import { TextField } from "@mui/material";

type Props = {
    name: string;
    type: string;
    label: string;
}

const CustomizedInput = (props: Props) => {
    return <TextField slotProps={{inputLabel: {style:{color:'white'}},input: {style: { width: "400px", borderRadius: 10, fontSize: 20 }}}} name={props.name} label={props.label} type={props.type}/>
}

export default CustomizedInput