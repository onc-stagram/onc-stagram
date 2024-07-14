sec 1
    st 1 introduction
sec 2 Installation 
    st 1 install Nextjs and TailWind CSS and create homepage template
        create project name onc-stagram by command ==> npx create-next-app@latest onc-stagram
        - use devDependencies Tailwind , eslint,eslint-config-next
        create github for create respositories names onc-stagram
sec 3 Header Section
    st 2  install tailwind css form
            => npm install @tailwindcss/froms
            
            edt tailwind.css
            => require('@tailwindcss/forms')
        npm install @heroicons/react


    st 3 Add the menu and profile image at the right side of header
            import { SearchIcon,PlusCircleIcon } from '@heroicons/react/outline';
            import {HomeIcon} from "@heroicons/react/solid"
    st 4  Implement sticky header
            recoment install plugin Mithril Emmet
sec 4   Story Section
    st 1  Populate fake data usning minifaker and create feed and story components
        create Feed.js in components floder
        create Stories.js in components floder
        install ninifaker for test program
        => npm i minifaker
    
    st 2 Style the story section and install tailwind css
    =>npm install --save-dev tailwind-scrollbar
    edit tailwind.config.js
        plugins: [
                        require('@tailwindcss/forms'),
                        require('tailwind-scrollbar')
                 ],


            
        

