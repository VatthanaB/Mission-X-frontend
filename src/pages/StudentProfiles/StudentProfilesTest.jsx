import {useEffect, useState} from 'react';
import styles from './StudentProfiles.module.css';
import axios from 'axios'

const handleStudentProfile = (e) => {
  
}
const StudentProfilesTest = () => {

    const [studentData, setStudentData] = useState([]);

      useEffect(() => {
    const fetchData = async () => {
    axios.get('http://localhost:4000/progresstracker/poutama') 
      .then(response => {
        setStudentData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
      fetchData();
    }
  }, []);



    const StudentProfileData = [
    {
      name: "AIDEN ANDREWS",
      image: "/images/students/AidenAndrews.png",
      id: 1
    },
    {
      name: "COURTNEY BRISTOL",
      image: "/images/students/CourtneyBristol.png",
      id: 2
    },
    {
      name: "NAGANI CORTEZ",
      image: "/images/students/NaganiCortes.png",
      id: 3
      
    },
    {
      name: "RAWIRI FLETCHER",
      image: "/images/students/RawiriFletcher.png",
      id: 4
    },
    {
      name: "JAVIER FUEGO",
      image: "/images/students/JavierFuego.png",
      id: 5
    },
    {
      name: "TOKIO HAN",
      image: "/images/students/TokioHan.png",
      id: 6
    },
    {
      name: "LISA HORAN",
      image: "/images/students/LisaHoran.png",
      id: 7
    },
    {
      name: "ALICE KINDELLAND",
      image: "/images/students/AliceKindellan.png",
      id: 8
    },
    {
      name: "SIMON LAINE",
      image: "/images/students/SimonLaine.png",
      id: 9
    },
    {
      name: "NEVEAH MACHENRY",
      image: "/images/students/NeveahMachenry.png",
      id: 10
    },
    {
      name: "HARRY MCGRATH",
      image: "/images/students/HarryMcGrath.png",
      id: 11
    },
    {
      name: "LUCIA MENDEZ",
      image: "/images/students/LuciaMendez.png",
      id: 12
    },
    {
      name: "HANU NAPE",
      image: "/images/students/HanuNepe.png",
      id: 13
    },
    {
      name: "SHANE O'MALEY",
      image: "/images/students/ShaneOMonahan.png",
      id: 14
    },
    {
      name: "MARK O'LEARY",
      image: "/images/students/MarkOLeary.png",
      id: 15
    },
        {
      name: "Spacerbot1",
      image: "/images/students/JavierFuego.png",
      id: 16
    },
        {
      name: "Autobot1",
      image: "/images/students/JavierFuego.png",
      id: 16
    },
        {
      name: "Autobot2",
      image: "/images/students/JavierFuego.png",
      id: 16
    },
        {
      name: "Autobot3",
      image: "/images/students/JavierFuego.png",
      id: 16
    },
        {
      name: "Autobot4",
      image: "/images/students/JavierFuego.png",
      id: 16
    }
  ]
// return jsx for the component
      return (
        <div className={styles.mainContainer}>
          <div className={styles.studentContainer}> 
            <div className={styles.student}>

{/* map through each student data and display them */}
             {StudentProfileData.map((student) => {
               return (

 // display each student with a click handler to set the selected student ID (for databasing)
                 <div className={styles.studentDiv} key={student.id} onClick={handleStudentProfile}>

{/* display student images  */}
                   {<img src={student.image} alt="student img" />}

{/* display name of students */}
                   <h6 className={styles.studentName}><br></br>{student.name}</h6>
                   
{/* still pending but need to add scroll bar webkit? mozkit? */}
                   <div className={styles.scrollBar}></div>
                   </div>
               );
             })}
             </div>
           </div>
        </div>
        
    );
}

export default StudentProfilesTest;

