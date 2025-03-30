import PropTypes from "prop-types";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Card()
{
    Card.propTypes = {
        path: PropTypes.any,
        def: PropTypes.any,
        elo: PropTypes.any,
    };

    const [name, setName] = useState("Megan Fox");
    const [flag, setFlag] = useState(true);
    const [data1, setValue1] = useState({name:'',elo:'',img:''});
    const [data2, setValue2] = useState({name:'',elo:'',img:''});
    const gen = useSelector((store) => store.face);

    const urls = {
        w: "https://faceoff-2.onrender.com/api/random",
        m: "https://faceoff-2.onrender.com/api/random_m"
    }

    const fetchURL = gen === "w" ? urls.w : urls.m;

    const fetchData = () => {
        fetch(fetchURL)
            .then((res) => res.json())
            .then((data) => {
                setValue1({name:data.data1,elo:data.data1_elo,img:data.data1_img});
                setValue2({name:data.data2,elo:data.data2_elo,img:data.data2_img});})
            .catch(error => console.error(error))
        };

    useEffect(() => {
        fetchData();
        response(name);
    }, [flag, gen]);

    function response(name) {
        // Place API calls here
        //alert("Clicked! " + def)
        const s_name = name;
        try{
        fetch("https://faceoff-2.onrender.com/api/rating", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ s_name }),
        })
            .then((res) => res.json())
        }
        catch(err){
            console.log("error : ", err)
            }
        }

    return (
        <motion.div
             initial = {{ y: "100vh"}}
             animate = {{y: 0}}
             transition={{duration: 1.5}}
             className="flex flex-col lg:flex-row justify-center items-center bg-transparent lg:min-h-[60svh] w-[80%] sm:w-[50%] lg:w-[80%] lg:mt-20 m-auto mt-4 gap-6 lg:gap-12"> 
        <div className="flex flex-col justify-center items-center h-full lg:hover:scale-105 bg-black text-white border-2 p-4 shadow-md hover:shadow-lg duration-500 cursor-pointer shadow-red-400" onClick={() => {setFlag(!flag), setName(data1.name)}}>
            <motion.img
             initial = {{ opacity: 0}}
             animate = {{opacity: 1}}
             transition={{duration: 0.2, delay: 1.9}}
             src={data1.img} alt={data1.name} className="h-80 m-2 border-2"/>
            <p className="text-lg font-semibold font-serif">{data1.name}</p>
        </div>
         <div className="flex flex-col justify-center items-center h-full lg:hover:scale-105 bg-black text-white border-2 p-4 shadow-md hover:shadow-lg duration-500 cursor-pointer shadow-red-400" onClick={() => {setFlag(!flag), setName(data2.name)}}>
            <motion.img
            initial = {{ opacity: 0}}
            animate = {{opacity: 1}}
            transition={{duration: 0.2, delay: 1.9}}
            src={data2.img} alt={data2.name} className="h-80 m-2 border-2"/>
            <p className="text-lg font-semibold font-serif">{data2.name}</p>
        </div>
        </motion.div>
    )
}

export default Card
