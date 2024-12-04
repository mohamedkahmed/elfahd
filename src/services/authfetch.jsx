// space = "s2ctombok2fz"
// acsesToken = "tcNgrtoLtnp2CzZ3eiHug-Rz6gBTfZNe4xtdZcYTOcM"
// environment = "master"
import { createClient } from "contentful";
import { useState, useEffect } from "react";

function checkURLProtocal(url){
    const rgex = /http(s)/gi;
const newURL = rgex.test(url) ? url : `https:${url}`;
    return newURL;
};


/* home sliders */

const homeServices = createClient({
    space: "xo7b9qdsr80l",
    environment: "master",
    accessToken: "7ZochPBPC1__LAlTKkSTTtWIlH3JcRtaaeaxQf0SidQ"
})
export const useFetchHomeServices = () => {
    const [loading, setLoading] = useState(true)
    const [homeservicesData, setHomeServicesData] = useState([])
    const getData = async() => {
        try {
            const response = await homeServices.getEntries({ content_type: "alfahdHomeServices" , order: "sys.createdAt" });
            const homeSlider = response.items.map((item) => {
            
                const {title, details , knowMore,
                    serviceImage
                } = item.fields
                const id = item.sys.id
                const image = serviceImage?.fields?.file?.url
                return { id, title, details ,image ,  knowMore}
            })
            setHomeServicesData(homeSlider)
         
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
    getData()
    }, [])
    return {loading, homeservicesData}
}
export const useFetchHomeAbout = () => {
    const [loading, setLoading] = useState(true)
    const [homeAboutData, setHomeAboutData] = useState([])
    const getData = async() => {
        try {
            const response = await homeServices.getEntries({ content_type: "alfahdHomeAbout" , order: "sys.createdAt" });
            const homeSlider = response.items.map((item) => {
               
                const {title, about , aboutImage
                } = item.fields
                const id = item.sys.id
                const image = aboutImage?.fields?.file?.url
             
                return { id, title, about , image}
            })
            setHomeAboutData(homeSlider)
      
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
    getData()
    }, [])
    return {loading, homeAboutData}
}
export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])
    const getData = async() => {
        try {
            const response = await homeServices.getEntries({ content_type: "alfahdProjects" , order: "sys.createdAt" });
            const homeSlider = response.items.map((item) => {
                console.log("Item Fields:", item.fields);
                const {category, projectName , projectdetails ,
                    projectImage , projectLink
                } = item.fields
                const id = item.sys.id
                const image = projectImage?.fields?.file?.url
             
                return { id, category,projectdetails ,  projectName , image , projectLink}
            })
            setProjects(homeSlider)
            console.log(response)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
    getData()
    }, [])
    return {loading, projects}
}
export const useFetchhowItworks = () => {
    const [loading, setLoading] = useState(true)
    const [howtitworks, setHowitworks] = useState([])
    const getData = async() => {
        try {
            const response = await homeServices.getEntries({ content_type: "howtItWorks" , order: "sys.createdAt" });
            const homeSlider = response.items.map((item) => {
                console.log("Item Fields:", item.fields);
                const {title , details
                    ,
                    image 
                } = item.fields
                const id = item.sys.id
                const imagework = image?.fields?.file?.url
             
                return { id, title,details
                     , imagework }
            })
            setHowitworks(homeSlider)
            console.log(response)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
    getData()
    }, [])
    return {loading, howtitworks}
}
export const useFetchHomeHero = () => {
    const [loading, setLoading] = useState(true)
    const [homeHero, setHomeHero] = useState([])
    const getData = async() => {
        try {
            const response = await homeServices.getEntries({ content_type: "heroHomePage" , order: "sys.createdAt" });
            const homeSlider = response.items.map((item) => {
               
                const {title, details , image , stepsProject
                } = item.fields
                const id = item.sys.id
                const image1 = image?.fields?.file?.url
             
                return { id, title, details , image1 , stepsProject}
            })
            setHomeHero(homeSlider)
      
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
    getData()
    }, [])
    return {loading, homeHero}
}
export const useFetchHomeSection = () => {
    const [loading, setLoading] = useState(true)
    const [homeHero2, setHomeHero2] = useState([])
    const getData = async() => {
        try {
            const response = await homeServices.getEntries({ content_type: "homeFirstSection" , order: "sys.createdAt" });
            const homeSlider = response.items.map((item) => {
               
                const { details , image 
                } = item.fields
                const id = item.sys.id
                const image1 = image?.fields?.file?.url
             
                return { id, details , image1}
            })
            setHomeHero2(homeSlider)
      
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    
    
    useEffect (() => {
    getData()
    }, [])
    return {loading, homeHero2}
}