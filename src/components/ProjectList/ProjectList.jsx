import './style.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // для отображения ссылки на детальную страницу 
import {fetchProjects} from '../../../src/utils/api';
import { useTranslation } from 'react-i18next';
import projectCard from "../../assets/image/project-card.svg";






function ListView(){
    const[projects, setProjects] = useState([]);
    const { i18n } = useTranslation();

    
    // Функция для перевода, объявляем внутри компонента
    // const getTranslated = (project, field) => {
    //     const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
    //     return project[`${field}_${lang}`];
    // };

    // Функция для перевода, объявляем внутри компонента меняет языки динамически апи
    const getTranslated = (project, field) =>{
        const lang = i18n.language.slice(0, 2);  
        return project[`${field}_${lang}`] || project[`${field}_ru`]; 
    }

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
        fetchProjects().then(setProjects).catch(console.error);
    }, []);
   
    // return(
    //     <>
    //         <div className="p-4 text-white mt-[100px]">
    //             {projects.length === 0 ? (
    //                 <p>Нет проектов</p>
    //             ) : (
    //                 <ul className="text-white">
    //                 {projects.map((project) => (
    //                     <li key={project.id}>
                            
    //                         <Link to={`/projects/${project.slug}`}><strong>{getTranslated(project, 'name')} {getTranslated(project, 'description')}</strong></Link>
    //                     </li>
    //                 ))}
    //                 </ul>
                    
    //             )}
    //         </div>
           
    //     </>
    // );
    return(
        <>
            <div id="project-list" className="w-full overflow-x-hidden flex justify-center items-center max-w-[1000px] mx-auto relative mt-[200px]">
                {projects.length === 0 ? (
                    <p className="text-white">Нет проектов</p>
                ) : (
                <div className="inline-flex gap-20 px-4 slider">
                    {projects.map((project) => (

                        <Link to={`/projects/${project.slug}`}><div
                        key={project.id} 
                        className="card-projects w-[600px] h-[360px]  bg-cover bg-center flex flex-col hover:scale-105 active:scale-100 overflow-hidden"
                        // style={{ backgroundImage: `url(${'/image/project-card.svg'})` }}>
                        style={{ backgroundImage: `url(${projectCard})` }}>

                            <div class="mt-[150px] ml-[50px]">
                                <h5 className="font-jost text-xl text-stone-100 line-clamp-1">
                                    {project ? getTranslated(project, 'name'): "No project name"}
                                </h5>
                                <h6 className="font-jost text-sm text-blue-200 w-[500px] line-clamp-2 mt-2">
                                    {getTranslated(project, 'description')}
                                </h6>
                            </div>

                        </div></Link>
                    ))}
                </div>
            )}
            </div>
    
    </>
    )
} 



export default ListView;
