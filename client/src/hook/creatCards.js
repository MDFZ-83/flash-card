import {  useState , useNavigate } from "react"
import axios from "axios"


export const CreatCards = () =>{
    const [set1 , SetSet1] = useState([])

    

    const[title , SetTitle] = useState("")
    const[des1 , Setdes1] = useState("")
    
    const [term , SetTerm] = useState()
    const [des2 , Setdes2] = useState()
 
    const [item , Setitems ] = useState([])

    
   
    
       
    const changes = (event) =>{
        if(event.target.getAttribute("id") == "creat-set-input") { SetTitle(event.target.value)}
        else if(event.target.getAttribute("id") == "creat-set-textarea") {Setdes1(event.target.value)}
        

        
    }

    const change1 = (event)=>{
        if(event.target.getAttribute("id") == "creat-set-term") {  SetTerm(event.target.value) }
        else if(event.target.getAttribute("id") == "creat-set-des") { Setdes2(event.target.value)}
        
       
    }

 
    const card = () =>{
        
        SetSet1([...set1 , {term ,  des2}])
        Setitems([...item , 1])

        console.log(item)
    }    
    

    const save = (event)=>{
        event.target.setAttribute("class" , "btn btn-outline-red mx-2")
        SetSet1([...set1 , {term ,  des2}])
        
    }
    

    

    const creat = async() =>{
        
        

        await axios.post("http://localhost:5000/api/card/set" ,{
            title : title,
            description : des1,
            cards : set1 
        }).then(console.log("ok"))
        
        

        

    }



  
   
    return {changes , creat , change1  , card , item , save   }
}

