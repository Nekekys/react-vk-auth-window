import React from "react";


export function VKAuthButtonCustom({vkId, callBack, children}) {
    const mainHandler = () => {
        const vk = window.open(
            `https://oauth.vk.com/authorize?client_id=${vkId}&redirect_uri=${window.location.href}&scope=12&display=page&response_type=token`,
            'caption',
            'resizable=1,width=700,height=500',
            true
        );

        const popupCheck = () => {
            if (vk.closed) {
                clearInterval(newInterval);
            } else {
                let url;
                try {
                    url = vk.location.href.split('#');
                } catch (e) {
                    return true;
                }
                if (url.length > 1) {
                    const data = url[1].split('&');
                    const objMain = {};
                    for (let i = 0; i < data.length; i += 1) {
                        const elem = data[i].split('=');
                        objMain[elem[0]] = String(elem[1]);
                    }
                    if (objMain.access_token) {
                        callBack(objMain);
                        vk.close();
                    }
                }
            }
        };

        let newInterval = setInterval(popupCheck, 100);
    }
    return (
        <div onClick={mainHandler}>{children}</div>
    )
}

function VKAuthButton({vkId, callBack, children}) {


    const mainHandler = () => {
        const vk = window.open(
            `https://oauth.vk.com/authorize?client_id=${vkId}&redirect_uri=${window.location.href}&scope=+4194304&display=page&response_type=token`,
            'caption',
            'resizable=1,width=700,height=500',
            true
        );

        const popupCheck = () => {
            if (vk.closed) {
                clearInterval(newInterval);
            } else {
                let url;
                try {
                    url = vk.location.href.split('#');
                } catch (e) {
                    return true;
                }
                if (url.length > 1) {
                    const data = url[1].split('&');
                    const objMain = {};
                    for (let i = 0; i < data.length; i += 1) {
                        const elem = data[i].split('=');
                        objMain[elem[0]] = String(elem[1]);
                    }
                    if (objMain.access_token) {
                        callBack(objMain);
                        vk.close();
                    }
                    if (objMain.error) {
                        vk.close();
                    }
                }
            }
        };

        let newInterval = setInterval(popupCheck, 100);
    }

    return (
        <div
            onClick={mainHandler}
            style={{
                display: 'flex',
                backgroundColor: '#0077FF',
                color: '#fff',
                alignItems: 'center',
                padding: '8px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                justifyContent: 'center',
                fontSize: '20px'
            }}
        >
            <svg
                style={{filter: 'invert(1)'}}
                width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.802 12.298s1.617 1.597 2.017 2.336a.127.127 0 0 1 .018.035c.163.273.203.487.123.645-.135.261-.592.392-.747.403h-2.858c-.199 0-.613-.052-1.117-.4-.385-.269-.768-.712-1.139-1.145-.554-.643-1.033-1.201-1.518-1.201a.548.548 0 0 0-.18.03c-.367.116-.833.639-.833 2.032 0 .436-.344.684-.585.684H9.674c-.446 0-2.768-.156-4.827-2.327C2.324 10.732.058 5.4.036 5.353c-.141-.345.155-.533.475-.533h2.886c.387 0 .513.234.601.444.102.241.48 1.205 1.1 2.288 1.004 1.762 1.621 2.479 2.114 2.479a.527.527 0 0 0 .264-.07c.644-.354.524-2.654.494-3.128 0-.092-.001-1.027-.331-1.479-.236-.324-.638-.45-.881-.496.065-.094.203-.238.38-.323.441-.22 1.238-.252 2.029-.252h.439c.858.012 1.08.067 1.392.146.628.15.64.557.585 1.943-.016.396-.033.842-.033 1.367 0 .112-.005.237-.005.364-.019.711-.044 1.512.458 1.841a.41.41 0 0 0 .217.062c.174 0 .695 0 2.108-2.425.62-1.071 1.1-2.334 1.133-2.429.028-.053.112-.202.214-.262a.479.479 0 0 1 .236-.056h3.395c.37 0 .621.056.67.196.082.227-.016.92-1.566 3.016-.261.349-.49.651-.691.915-1.405 1.844-1.405 1.937.083 3.337z"/>
            </svg>
            {children &&
            <div style={{marginLeft: '10px'}}>
                {children}
            </div>
            }

        </div>
    );
}

export default VKAuthButton;