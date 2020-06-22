import {useState} from "react";

export const useProfile = data =>{
    const [social, setSocialValues] = useState(data);

    return(
        [social, e =>{
            setSocialValues({
                ...social,
                [e.target.name] : e.target.value
            });
        }]
    );

} 