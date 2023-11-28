import React, {useState, useEffect} from 'react';
import styles from './StudentProfiles.module.css';
import axios from 'axios';



const StudentProfiles = () => {



  const [StudentProfileData, setStudentProfileData ] = useState([])
  const [profilesToDisplay , setProfilesToDisplay] = useState()
 

  // UseEffect will fetch the data from the DB when the component is rendered 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/student-profile/poutama');
        // console.log(response.data);
        setStudentProfileData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  // UseEffect to set ProfilesToDisplay State whenever StudentProfileData State is updated 

  useEffect(() =>{
    console.log(StudentProfileData)
    const data = StudentProfileData.map((student) => {
      return (

        <div className={styles.studentDiv} key={student.id}>

           
          <img src={`/images/students/${student.profile_pic}`} alt="student img" />
          
          <h6 className={styles.studentName}> {student.name.toUpperCase()}</h6>
          

          <div className={styles.scrollBar}></div>
          </div>
      );
    })
      
    setProfilesToDisplay(data)

  },[StudentProfileData])

  
      return (
        <div className={styles.mainContainer}>
          <div className={styles.studentContainer}> 
            <div className={styles.student}>

             {profilesToDisplay }

             </div>
           </div>
        </div>
        
    );
  };
export default StudentProfiles;

