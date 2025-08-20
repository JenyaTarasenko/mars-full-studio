
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // для отображения ссылки на детальную страницу 
import {fetchProjects} from '../../../src/utils/api';
import { useTranslation } from 'react-i18next';






function ListView(){
    const[projects, setProjects] = useState([]);
    const { i18n } = useTranslation();

    
    // Функция для перевода, объявляем внутри компонента
    const getTranslated = (project, field) => {
        const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
        return project[`${field}_${lang}`];
    };

    // useEffect(()=>{
    //     // fetch('https://jenyatarasenko.pythonanywhere.com/api/projects/')
    //     fetch('http://127.0.0.1:8001/api/projects/')
    //     .then(res =>{
    //         console.log('Status:', res.status);
    //         return res.json()
    //     })
    //     .then(data => setProjects(data))
    //     .catch(err => console.error(err))
    // },[]);
    useEffect(() => {
        fetchProjects().then(setProjects);
    }, []);
   
    return(
        <>
            <div className="p-4 text-white mt-[100px]">
                {projects.length === 0 ? (
                    <p>Нет проектов</p>
                ) : (
                    <ul className="text-white">
                    {projects.map((project) => (
                        // <li key={project.id}>
                        // <strong>{project.name}</strong> – {project.description}
                        // </li>
                        <li key={project.id}>
                            {/* <strong>{i18n.language.startsWith('ru') ? project.name_ru : project.name_en}</strong> –{' '}
                            {i18n.language.startsWith('ru') ? project.description_ru : project.description_en} */}
                            <Link to={`/projects/${project.slug}`}><strong>{getTranslated(project, 'name')} {getTranslated(project, 'description')}</strong></Link>
                        </li>
                    ))}
                    </ul>
                    
                )}
            </div>
           
        </>
    );
}

export default ListView;
