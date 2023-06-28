import './style.css';
import { AiOutlineLink } from "react-icons/ai";

const BtnGitHub = ({ link }) => {
    return ( 
           <a href={link} target="_blank" rel='noreferrer' className="btn-outline" >
                <AiOutlineLink />
                    Link
                </a>
     );
}
 
export default BtnGitHub;