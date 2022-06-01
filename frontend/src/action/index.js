
export const getAllServices = (res) => {
     return{
          type : "getAllServices",
          response : res
     }
}

export const getAllArea = (res) => {
     return{
          type : "getAllArea",
          response : res
     }  
}


export const AddService = (res) => {
     return{
          type : "AddService",
          response : res
     }  
}


export const RemoveService = (res) => {
     return{
          type : "RemoveService",
          response : res
     }  
}