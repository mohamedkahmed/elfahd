import React, { useEffect } from 'react'
import { createContext, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useFetchProjects } from '../../services/authfetch'


export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const {t} = useTranslation()
  // const data = t("Projects" , {returnObjects:true})
  const {loading:loadingprojects, projects} = useFetchProjects()
  const [myData , setMyData] = useState([])
  useEffect(() => {
    if(projects) {
      setMyData(projects)
    }
  } , [projects])
  console.log(myData)
  const unique_Data = ["All" , ...new Set(projects?.map((item) => item?.category))]
  const [bageid, setbageid] = useState(null)
  const [catgery_active , setcatgery_active] = useState('All')
  const FilterateItems = (catgery) => {
    setcatgery_active(catgery)
    if(catgery === "All" && projects) {
    return  setMyData([...projects]);
    } 
    const newItems = projects?.filter((item) => item?.category === catgery)
    return setMyData(newItems)

  }
  const [massage_Apper , setmassage_Apper] = useState(false) 
const massageHandelar = () => {
  setmassage_Apper(!massage_Apper)

}
const close_massage = () => {
  setmassage_Apper(false)
}
  return (
    <AppContext.Provider value={{ bageid, 
    setbageid,
    myData,
    close_massage,
    FilterateItems,
    catgery_active,
    unique_Data,
    massage_Apper,
    loadingprojects,
    massageHandelar
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}