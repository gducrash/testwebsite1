import Button from '../Button/Button';
import classes from './FormBox.module.scss';

type FormBoxProps = {
    heading:     string,
    description: string,
    formTitle:   string,
    formButton:  string,
    children: React.ReactNode[] | React.ReactNode
}

const FormBox = (props: FormBoxProps) => {

    return (
        <div className={classes["form-box-wrap"]}>
            <div className={classes["left"]}>
                <h2>{ props.heading } </h2>
                <p> { props.description } </p>
            </div>
            <div className={classes["form-box"]}>
                <h3>{ props.formTitle }</h3>
                { props.children }
                <Button text={props.formButton} />
            </div>
        </div>
    );

}

export default FormBox;