import Button from '@material-ui/core/Button';
import React, {useState} from 'react';


const Sitebar = (props) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return (
         <Button onClick={props.clickLogout}>Logout</Button>
                    
    )
}

export default Sitebar;