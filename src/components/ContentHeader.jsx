import { useEffect, useState } from "react";
import {
    faMagnifyingGlass,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {useNavigate} from "react-router-dom";
  import { debounce } from '../util';
  
  const ContentHeader = () => {
    const params = window.location.pathname.split('/')[1];
    const search = window.location.search.split('=')[1];
    const [searchTerm, setSearchTerm] = useState(search);
    const navigate = useNavigate();

    useEffect(() => {
     if (search) {
      setSearchTerm(search); 
     }
    }, []);

    const handleChange = debounce((e) => {
    navigate(`/${params}/?search=${e.target.value}`)
    })


    return (
      <div className="bg-dark-500 flex items-center py-6 px-10 mb-1">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-xl text-light-300"
        />
        <input
          placeholder="Search..."
          className="w-4/12 mr-auto ml-4 bg-transparent outline-none"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleChange(e)
          }}
        />
      </div>
    );
  }

  export default ContentHeader;