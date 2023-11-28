

import {useState} from 'react';
import styles from './ProgressTracker.module.css';




function ProgressTracker() {




 

  const StudentProfileData = [
   

  ]
// return jsx for the component
      return (
        <div className={styles.stretchContainer}>
        <div className={styles.mainContainer}>
            <h1>BEGINNER COURSE</h1> 
            <button><img src="https://www.clipartmax.com/png/middle/111-1115697_export-to-excel-icon-microsoft-office-now-available-on-chromebooks.png" alt="excel img"  />
            EXPORT AS SPREADSHEET
            </button>
            
          <div className={styles.studentContainer}> 
            <div className={styles.student}>

             {StudentProfileData.map((student) => {
               return (
                 <div key={student.id} > {/*onClick={() => handleToggleCompletion(student.id)}*/}
                   <h6 className={styles.studentName}>
                    
                    {student.name}
                    
                    
                    <h6 >1/15 Projects Completed</h6>
                    </h6>
                    <div className={styles.projectArray ? styles.projectNotCompleted : styles.projectIsCompleted}> 
                     {/* {student.projects.map((project) => {
                        return (
                          <div key={project.id} className={styles.project}>
                            <h6 className={styles.projectName}>{project.name}</h6>
                          </div>
                        );
                      })} */}
                      1 
                    </div>

                    

                    

                   
                   <div className={styles.scrollBar}>
                    
                   </div>
                   </div>
               );
             })}
             </div>
           </div>
        </div>
        </div>
        
    );
}


export default ProgressTracker;