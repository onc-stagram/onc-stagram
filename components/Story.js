import styles from "../Assets/Story.module.css";

export default function Story({ img, username }) {
  return <div>
            {/* <img src={img} alt={username} /> */}
            {/* <p>{username}</p> */}
            <img className="h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"  src={img} alt={username} />
            <p className="text-xs w-14 truncate">{username}</p>
                
        </div>;
   
    {/* <div className={styles.story}>
        <img className="h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"  
                src={img} alt={username} 
        />
      <p className="text-xs w-14 truncate">{username}</p>
    </div> */}



  
}