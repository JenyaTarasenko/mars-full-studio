import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjects } from '../../../src/utils/api';
import { useTranslation } from 'react-i18next';

const DetailList =()=>{
    const{slug}= useParams();
    const[project, setProject]= useState(null);
    const [error, setError] = useState(null);
    const { i18n } = useTranslation();

    const getTranslated = (project, field) => {
        const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
        return project[`${field}_${lang}`];
    };

   useEffect(()=>{
    fetchProjects()
    .then(data=>{
        const found = data.find(proj => proj.slug === slug);
        if (found) {
            setProject(found);
        } else {
            setError('Проект не найден');
        }
    })
    .catch(err => {
        console.error(err);
        setError('Ошибка загрузки проекта');
    });
   },[slug]);
    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8001/api/projects/${slug}/`)
    //     .then(res => res.json())
    //     .then(data => setProject(data));
    // }, [slug]);
   if (error) return <div>{error}</div>
   if (!project) return <div>Загрузка</div>
    return(
        <div>
            <div className="detail text-white mt-[100px]">
                <div>Detail page</div>
                <strong>{getTranslated(project, 'name')} {getTranslated(project, 'description')}</strong> 
            </div>
           
        </div>
    );
}
export default DetailList;