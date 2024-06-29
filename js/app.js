const openMenu = () => {
    const menu = document.querySelector(".head-menu-mobile");
    console.log(menu)
    menu.classList.toggle("active");
    if(menu.classList.contains("active")){
        document.querySelector("header.material-icons").innerHTML = "close"
    }
    else{
        document.querySelector("header.material-icons").innerHTML = "menu"
    }
}

const translations = {
    fr:{
        objectif :"Objectif: Ingénieure en robotique",
        a_propos: "A propos de moi",
        de_moi: "Actuellement étudiant en école d'ingénieur à ECAM Rennes Louis de Broglie. Passionné par la technologie et l'innovation, j'ai pour objectif de devenir ingénieur en robotique, un domaine qui me fascine par son potentiel à transformer notre quotidien et à repousser les limites du possible.",
        Competences: "Découvrez mes compétences",
        Contact: "Contactez-moi",
        Menu_A:"Accueil",
        Menu_B:"A propos de moi",
        Menu_C:"Compétence",
        Menu_D:"Contactez-moi",
        LinkedIn:"Compte LinkedIn",
        phone:"Téléphone:"
    },
    en:{
        objectif :"Objective: Robotics engineer",
        a_propos: "About myself",
        de_moi: "Currently studying engineering at ECAM Rennes Louis de Broglie. Passionate about technology and innovation, my goal is to become an engineer in robotics, a field that fascinates me because of its potential to transform our daily lives and push back the limits of what's possible.",
        Competences: "Discover my skills",
        Contact: "Contact me at",
        Menu_A:"Home",
        Menu_B:"About myself",
        Menu_C:"Skills",
        Menu_D:"Contact me",
        LinkedIn:"LinkedIn account",
        phone:"Phone:"
    },
    }

const languageSelectop = document.querySelector("select");
let objectif = document.getElementById("objectif");
let a_propos = document.getElementById("a_propos");
let de_moi = document.getElementById("de_moi");
let Competences = document.getElementById("Competences");
let Contact = document.getElementById("Contact");
let Menu_A = document.getElementById("Menu_A");
let Menu_B = document.getElementById("Menu_B");
let Menu_C = document.getElementById("Menu_C");
let Menu_D = document.getElementById("Menu_D");
let LinkedIn = document.getElementById("LinkedIn");
let phone = document.getElementById("phone");

languageSelectop.addEventListener("change",(event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if(language == "en"){

        obj.innerText = translations.en.objectif;
        propos.innerText = translations.en.a_propos;
        moi.innerText = translations.en.de_moi;
        competence.innerText = translations.en.Competences;
        contact.innerText = translations.en.Contact
        menu_a.innerText = translations.en.Menu_A
        menu_b.innerText = translations.en.Menu_B
        menu_c.innerText = translations.en.Menu_C
        menu_d.innerText = translations.en.Menu_D
        tel.innerText = translations.en.phone
        link.innerText = translations.en.LinkedIn

    }
    else if(language == "fr"){

        obj.innerText = translations.fr.objectif;
        propos.innerText = translations.fr.a_propos;
        moi.innerText = translations.fr.de_moi;
        competence.innerText = translations.fr.Competences;
        contact.innerText = translations.fr.Contact
        menu_a.innerText = translations.fr.Menu_A
        menu_b.innerText = translations.fr.Menu_B
        menu_c.innerText = translations.fr.Menu_C
        menu_d.innerText = translations.fr.Menu_D
        tel.innerText = translations.fr.phone
        link.innerText = translations.fr.LinkedIn
    }
}   


function toggleMenu() {
    const menu = document.querySelector(".header-menu");
    const icon = document.querySelector(".menu-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}