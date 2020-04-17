export const config = {                    
    
    particles: { 
        //NUMBER
        number: { 
            value: 50, 
            density: { 
                enable: true, 
                value_area: 1000, 
            } 
        },
        //COLOR
        color: {
            value: "#000000" 
        },
        //SHAPE
        shape: {
            type: "none",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        //OPACITY
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: .5,
                opacity_min: 0.1,
                sync: false
            }
        },
        //SIZE
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        //LINE-LINKS
        line_linked: {
            enable: true,
            distance: 200,
            color: "#000000",
            opacity: 0.4,
            width: .7
        },
        //MOVE
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,

            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
},

retina_detect: true}