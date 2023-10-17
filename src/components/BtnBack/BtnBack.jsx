import BackIcon from "./Back_Arrow.svg"

const BtnGitHub = ({ link }) => {
    return ( 
           <a href={link} target="_blank" rel='noreferrer' className="btn-outline" >
                <img src={BackIcon} alt="" />
                    Back to Projects
                </a>
     );
}
 
export default BtnGitHub;