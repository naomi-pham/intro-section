import { useState } from 'react'

const useToggler = (defaultOnValue) => {

    const [isToggledOn, setIsToggledOn] = useState(defaultOnValue)

    function toggle() {
        setIsToggledOn(prevIsToggledOn => !prevIsToggledOn)
    }
    
    return [isToggledOn, toggle]
}

export default useToggler