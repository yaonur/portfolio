import {writable} from 'svelte/store'

function createSections() {
    const {subscribe, set, update} = writable([
        {name: "Experience", active: true},
        {name: "Skills", active: false},
    ]);
    const getActiveSection = () => {
        let activeSection = null;
        sections.subscribe(val => {
            val.forEach(section => {
                if (section.active === true) {
                    activeSection = section;
                }
            });
        });
        return activeSection.name;
    }

    const changeActiveSection = (name) => {
        sections.update(val => {
            console.log("chage active section runned")
            val.forEach(section => {
                if (section.name === name) {
                    section.active = true;
                } else if (section.active === true) {
                    section.active = false;
                }
            });
            return val;
        });
    }

    return {
        subscribe,
        update,
        set,
        getActiveSection,
        changeActiveSection
    };
}

export const sections = createSections();
// export const sections = writable([
//     {name: "Experience", active: true},
//     {name: "Skills", active: false},
// ])