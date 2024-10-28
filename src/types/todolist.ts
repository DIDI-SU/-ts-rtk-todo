

import { TextFieldProps } from "@mui/material";

export interface TodoListInputProps {
    id?:TextFieldProps["id"];
    title:TextFieldProps["title"];
    placeholder?: TextFieldProps['placeholder'];
    onFocus?: TextFieldProps['onFocus'];
    onBlur?: TextFieldProps['onBlur'];
    onChange?: TextFieldProps['onChange'];
    error?: TextFieldProps['error'];
    inputProps?: TextFieldProps['inputProps'];
    size?: TextFieldProps['size'];
    fullWidth?: TextFieldProps['fullWidth'];
    type?: TextFieldProps['type'];
    disabled?: TextFieldProps['disabled'];
    InputProps?: TextFieldProps['InputProps'];
    sx?: TextFieldProps['sx'];
    setFieldValue: (value: any) => void;
    value: TextFieldProps['value'];
}




export interface TodoItem {
    id?:number|string;
    title?:string;
    description?:string;
    completed?:boolean;
    createdAt?:Date;
    updatedAt?:Date;
}

export interface TodoViewItem extends TodoItem {
    isEdit?:boolean;
    isVisible?:boolean; 
}

