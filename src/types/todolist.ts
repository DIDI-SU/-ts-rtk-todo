/**
 * interface for the todo list
 * 
 * 1. id:number
 * 2. title:string 
 * 3. description:string
 * 4. completed:boolean
 * 5. createdAt:Date
 * 6. updatedAt:Date
 * 
 * 
 * 
 */

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

