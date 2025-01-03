export const success_res = (msg = "", data = {}) => {
    return {
        flag: 1,
        msg: msg.length == 0 ? "Success" : msg,
        data
    }
  }
  
export const error_res = (msg = "", data = {}) => {
    return {
        flag: 0,
        msg: msg.length == 0 ? "Error" : msg,
        data
    }
}

export const uploadImage = async (image) => {    

    try {
        
        if(image !== null){
            
            for(const key in image){
    
                const img = image[key];
                
                let imgName = `${Math.floor(Math.random() * 1000 * 1000)}.${img.name.split(".").pop().toLowerCase()}`;
                
    
                if (img.mimetype != "image/jpeg" && img.mimetype != "image/png" && img.mimetype != "image/jpg") {
                    
                    return error_res("Please select valid image format");
                }
    
                const uploadPath = `assets/images/${imgName}`;
    
                await img.mv(uploadPath)

                return imgName;
    
            }
    
        }
        else{
            return error_res("Please select image");
        }
        
    } catch (error) {
        console.log(error);
        throw error;
    }

}