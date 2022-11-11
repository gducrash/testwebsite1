import classes from './Section.module.scss';
import SectionPartTeam from "../SectionPart/SectionPartTeam";
import SectionPartContact from '../SectionPart/SectionPartContact';
import SectionPartForm from '../SectionPart/SectionPartForm';


const SectionMain = () => {

    return (
        <section className={classes["section-main"]} id="team">
            <SectionPartTeam />
            <SectionPartForm />
            <SectionPartContact />
        </section>
    )

}

export default SectionMain;