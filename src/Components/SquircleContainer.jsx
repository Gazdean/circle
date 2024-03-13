export default function SquircleContainer({children}) {
   
  
    return (
        <div className="squircle-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent:"center", width: 375, height: 375, border: "3px solid black", borderRadius: 115 }}>
       {children}
   </div>
    );
  }