import classes from './SearchInput.module.scss';
import Button from '../Button/Button';

import icLocation from '../../../assets/ic-location.svg';

type SearchInputProps = {
    placeholder?: string
}

const placeholderDefault = "Find the place to help";

const SearchInput = (props: SearchInputProps) => {
    return (
        <div className={classes['search-input-wrapper']}>
            <img 
                src={icLocation} alt="Icon Location" 
                className={classes['search-input-icon']} 
                draggable="false" 
            />
            <input type="text" placeholder={props.placeholder ?? placeholderDefault} />
            <Button text="Search" shrink />
        </div>
    );
}

export default SearchInput;