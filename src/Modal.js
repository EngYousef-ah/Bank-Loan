export default function Modal({isVisible,message=null}) {
    if(isVisible){
      return (
        <div id="modal">
            <div id="modal-content">
                <h1 style={{color: message ? "red" : "green"}}>
                    {message !==null ?
                     message :"The Form Has Been Submitted Successfully"}
                </h1>
            </div>
        </div>
    );      
    }else{
        return (<></>);
    }
    
}